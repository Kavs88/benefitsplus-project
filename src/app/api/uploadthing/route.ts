import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { NextRequest } from 'next/server';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .onUploadComplete(async ({ file }) => {
      // You can add additional logic here if needed (e.g., save to DB)
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

// Export the route handlers for Next.js API
export { GET, POST } from 'uploadthing/next'; 