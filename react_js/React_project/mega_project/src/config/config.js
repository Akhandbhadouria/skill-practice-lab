const config={
    appwrite_url:String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_project_id:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_database_id:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_collection_id:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_bucket_id:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)


}
export default config





//The config.js file is used to store and manage configuration settings for your React project.
//  In your code, it centralizes important environment variables (like API URLs, project IDs, and database IDs) 
// needed to connect to Appwrite services. By importing these values from environment variables, you can easily 
// change them without modifying your source code, making your app more flexible and secure.
//  This approach also helps keep sensitive information out of your codebase.

