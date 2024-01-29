const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRIRE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRIRE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRIRE_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRIRE_BUCKET_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRIRE_COLLECTION_ID)
}

export default config;