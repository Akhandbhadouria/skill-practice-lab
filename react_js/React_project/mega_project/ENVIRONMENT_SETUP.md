# Environment Variables Setup Guide

## Issue: Image Upload Not Working

Your image upload is failing because the environment variables are not configured. Follow these steps to fix it:

## Step 1: Create .env file

Create a `.env` file in your project root with the following content:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
VITE_APPWRITE_DATABASE_ID=your_database_id_here
VITE_APPWRITE_COLLECTION_ID=your_collection_id_here
VITE_APPWRITE_BUCKET_ID=your_bucket_id_here
```

## Step 2: Get Your Appwrite Configuration

1. **Log into your Appwrite Console** (https://cloud.appwrite.io)
2. **Select your project**
3. **Get the Project ID**: Go to Settings → General → Project ID
4. **Get Database ID**: Go to Databases → Select your database → Settings → Database ID
5. **Get Collection ID**: Go to Databases → Select your database → Select your collection → Settings → Collection ID
6. **Get Bucket ID**: Go to Storage → Select your bucket → Settings → Bucket ID

## Step 3: Replace the Values

Replace the placeholder values in your `.env` file with the actual IDs from your Appwrite console.

## Step 4: Restart Your Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Common Issues and Solutions

### 1. Environment Variables Not Loading
- Make sure the `.env` file is in the project root (same level as `package.json`)
- Restart your development server after creating the file
- Check that variable names start with `VITE_`

### 2. Bucket Permissions
Make sure your Appwrite bucket has the correct permissions:
- Go to Storage → Your Bucket → Settings → Permissions
- Add "Read" permission for "Any" role
- Add "Create" permission for authenticated users

### 3. File Size Limits
The code now includes a 5MB file size limit. If you need larger files, modify the `maxSize` variable in `src/appwrite/configration.js`.

### 4. File Type Restrictions
Only these image types are allowed:
- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)

## Testing the Upload

1. Open your browser's developer console (F12)
2. Try uploading an image
3. Check the console for detailed logs
4. Look for any error messages

## Debug Information

The updated code now includes:
- ✅ Detailed console logging
- ✅ File validation (size and type)
- ✅ Error handling with user feedback
- ✅ Loading states during upload
- ✅ Proper error messages

If you're still having issues, check the browser console for specific error messages.
