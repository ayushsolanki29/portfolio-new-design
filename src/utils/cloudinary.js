import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Uploads an image file to Cloudinary.
 * Designed to be used within a Next.js Server Action or API Route.
 * 
 * @param {File | string} file - The file to upload (File object from form data or base64 string/URL)
 * @param {string} folder - The destination folder in your Cloudinary account
 * @returns {Promise<Object>} - Returns the uploaded image data (secure_url, public_id, etc.)
 */
export async function uploadImage(file, folder = 'portfolio') {
  try {
    let fileToUpload = file;
    
    // If the file is a FormData File object, convert it to a base64 string
    // We check for arrayBuffer instead of instanceof File because Next.js polyfills can break instanceof checks
    if (typeof file === 'object' && file !== null && 'arrayBuffer' in file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64String = buffer.toString('base64');
      fileToUpload = `data:${file.type};base64,${base64String}`;
    }

    const result = await cloudinary.uploader.upload(fileToUpload, {
      folder: folder,
      // Optional: Add auto-format and auto-quality for optimization
      format: 'webp',
      quality: 'auto',
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Deletes an image from Cloudinary using its public_id.
 * Useful for when you delete a project and want to clean up its images.
 * 
 * @param {string} publicId - The unique public_id of the image
 * @returns {Promise<Object>}
 */
export async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return { success: true, result };
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Generates a signature for secure client-side uploads.
 * If you ever want to use the `<CldUploadWidget>` from next-cloudinary securely.
 */
export async function generateCloudinarySignature() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  
  const signature = cloudinary.utils.api_sign_request(
    { timestamp },
    process.env.CLOUDINARY_API_SECRET
  );

  return { timestamp, signature };
}

export default cloudinary;
