import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/configration";
import { Btn, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userid === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.get_post(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.delete_document(post.$id).then((status) => {
            if (status) {
                service.delete_file(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 page-bg">
            <Container>
                <div className="w-full flex justify-center mb-6 relative card p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Btn bgColor="bg-emerald-600" className="mr-3">
                                    Edit
                                </Btn>
                            </Link>
                            <Btn bgColor="bg-red-600" onClick={deletePost}>
                                Delete
                            </Btn>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl heading">{post.title}</h1>
                </div>
                <div className="browser-css subtle">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}