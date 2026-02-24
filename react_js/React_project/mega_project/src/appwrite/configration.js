import config from "../config/config";
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async create_post({ title, slug, content, featuredImage, status, userid }) {
        console.log('create_post called with:', { title, slug, content, featuredImage, status, userid });
        
        if (!userid) {
            throw new Error('userid is required but not provided');
        }
        
        return await this.database.createDocument(
            config.appwrite_database_id,
            config.appwrite_collection_id,
            slug,
            { title, content, featuredImage, status, userid }
        );
    }

    async update_Post(slug, { title, content, featuredImage, status, userid }) {
        return await this.database.updateDocument(
            config.appwrite_database_id,
            config.appwrite_collection_id,
            slug,
            { title, content, featuredImage, status, userid }
        );
    }

    async delete_document(slug) {
        await this.database.deleteDocument(
            config.appwrite_database_id,
            config.appwrite_collection_id,
            slug
        );
        return true;
    }
    async get_post(slug){
        return await this.database.getDocument(
            config.appwrite_database_id,
            config.appwrite_collection_id,
            slug
        );
    }

    async get_posts(queries=[Query.equal("status","active")]){
        return await this.database.listDocuments(
            config.appwrite_database_id,
            config.appwrite_collection_id,
            queries,
        );
    }

    async uploadFile(fileee){
        try {
            console.log('Uploading file:', fileee.name, 'Size:', fileee.size, 'Type:', fileee.type);
            
            // Validate file
            if (!fileee) {
                throw new Error('No file provided');
            }
            
            // Check file size (5MB limit)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (fileee.size > maxSize) {
                throw new Error('File size too large. Maximum size is 5MB');
            }
            
            // Check file type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(fileee.type)) {
                throw new Error('Invalid file type. Only JPEG, PNG, and GIF images are allowed');
            }
            
            console.log('File validation passed, uploading to Appwrite...');
            const result = await this.bucket.createFile(
                config.appwrite_bucket_id,
                ID.unique(),
                fileee,
                [Permission.read(Role.any())]
            );
            
            console.log('File uploaded successfully:', result);
            return result;
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }
    async delete_file(file_id){
        await this.bucket.deleteFile(
            config.appwrite_bucket_id,
            file_id
        );
        return true;
    }
    getFilePreview(fileId) {
        try {
            const url = this.bucket.getFilePreview(
                config.appwrite_bucket_id,
                fileId,
                { width: 1200, height: 800, quality: 80 }
            );
            return typeof url === 'string' ? url : url.toString();
        } catch (err) {
            try {
                const url = this.bucket.getFileView(config.appwrite_bucket_id, fileId);
                return typeof url === 'string' ? url : url.toString();
            } catch (e) {
                return '';
            }
        }
    }

}

const service = new Service();
export default service