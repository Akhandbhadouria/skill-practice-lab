import React from 'react'
import { useForm } from 'react-hook-form'
import {Btn,Inputt,Select,RTE} from "./index"
import service from '../appwrite/configration'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import auth_service from '../appwrite/auth'

export default function PostForm({post}) {
const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [imagePreview, setImagePreview] = React.useState("");
    const [isUploading, setIsUploading] = React.useState(false);
    const [uploadError, setUploadError] = React.useState("");
    
    // Debug: Log the entire auth state
    const authState = useSelector((state) => state.auth);
    console.log('Full auth state:', authState);
    console.log('userData from selector:', userData);

     const submit = async (data) => {
        setIsUploading(true);
        setUploadError("");
        try {
            console.log('Starting form submission with data:', data);
            console.log('Current userData:', userData);
            
            // Check if user is authenticated
            let currentUser = userData;
            
            // Fallback: If userData is not available in Redux, try to get it directly from Appwrite
            if (!userData || !userData.$id) {
                console.log('userData not available in Redux, trying to get from Appwrite...');
                try {
                    currentUser = await auth_service.curr_user();
                    console.log('Current user from Appwrite:', currentUser);
                } catch (error) {
                    console.error('Error getting current user from Appwrite:', error);
                }
            }
            
            if (!currentUser || !currentUser.$id) {
                throw new Error('User not authenticated. Please log in again.');
            }
            
            if (post) {
                // Update existing post
                let file = null;
                if (data.image && data.image[0]) {
                    console.log('Uploading new image for existing post...');
                    file = await service.uploadFile(data.image[0]);
                    console.log('Image uploaded successfully:', file);
                    
                    if (file && post.featuredImage) {
                        console.log('Deleting old image:', post.featuredImage);
                        await service.delete_file(post.featuredImage);
                    }
                }

                console.log('Updating post with data:', { ...data, featuredImage: file ? file.$id : post.featuredImage });
                const dbPost = await service.update_Post(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage,
                    userid: currentUser.$id, // Include userid for update
                });

                if (dbPost) {
                    console.log('Post updated successfully:', dbPost);
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                // Create new post
                if (!data.image || !data.image[0]) {
                    throw new Error('Please select an image to upload');
                }
                
                console.log('Uploading image for new post...');
                const file = await service.uploadFile(data.image[0]);
                console.log('Image uploaded successfully:', file);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    
                    // Prepare the post data with userid
                    const postData = { 
                        ...data, 
                        userid: currentUser.$id 
                    };
                    
                    console.log('Creating post with data:', postData);
                    console.log('User ID being used:', currentUser.$id);
                    console.log('All post data fields:', Object.keys(postData));
                    
                    const dbPost = await service.create_post(postData);

                    if (dbPost) {
                        console.log('Post created successfully:', dbPost);
                        navigate(`/post/${dbPost.$id}`);
                    }
                } else {
                    throw new Error('Failed to upload image');
                }
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            setUploadError(error.message);
        } finally {
            setIsUploading(false);
        }
    };

    const slugTransform = React.useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
            if (name === "image") {
                const file = value?.image?.[0];
                if (file) {
                    const url = URL.createObjectURL(file);
                    setImagePreview((prev) => {
                        if (prev) URL.revokeObjectURL(prev);
                        return url;
                    });
                }
            }
        });

        return () => {
            subscription.unsubscribe();
            setImagePreview((prev) => {
                if (prev) URL.revokeObjectURL(prev);
                return "";
            });
        };
    }, [watch, slugTransform, setValue]);

return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-4">
            <div className="w-full lg:w-2/3 px-2">
                <Inputt
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Inputt
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-full lg:w-1/3 px-2">
                <Inputt
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
               {(imagePreview || (post && post.featuredImage)) && (
    <div className="w-full mb-4 card overflow-hidden">
        <img
            src={imagePreview || service.getFilePreview(post.featuredImage)}
            alt={post ? post.title : "Selected preview"}
            className="rounded-lg w-full h-auto"
        />
    </div>
)}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Btn 
                    type="submit" 
                    bgColor={post ? "bg-emerald-600" : undefined} 
                    className="w-full"
                    disabled={isUploading}
                >
                    {isUploading ? "Uploading..." : (post ? "Update" : "Submit")}
                </Btn>
                {uploadError && (
                    <div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                        Error: {uploadError}
                    </div>
                )}
            </div>
        </form>
    );
}



// yebhi nahi aaya 
