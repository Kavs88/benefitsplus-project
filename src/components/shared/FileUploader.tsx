// FINAL, PRODUCTION-READY CODE FOR: src/components/shared/FileUploader.tsx

"use client";

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/route";
import Image from "next/image";
import { X } from "lucide-react";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
};

export function FileUploader({ imageUrl, onFieldChange }: FileUploaderProps) {
  // If we already have an image, display it with a "remove" button
  if (imageUrl) {
    return (
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt="Uploaded image preview"
          fill
          className="object-cover rounded-md"
        />
        <button
          type="button"
          onClick={() => onFieldChange("")} // Clear the image URL on click
          className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white shadow-sm hover:bg-red-600"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  // If no image, show the UploadDropzone component
  return (
    <UploadDropzone<OurFileRouter, "imageUploader">
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) {
          onFieldChange(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        // You can add a toast notification here for a better UX
        console.error(`ERROR! ${error.message}`);
        alert(`Upload failed: ${error.message}`);
      }}
      className="dark:border-gray-700 ut-label:text-primary ut-button:bg-primary ut-button:ut-readying:bg-primary/50"
    />
  );
}
