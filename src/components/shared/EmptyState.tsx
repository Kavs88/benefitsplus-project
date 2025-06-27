"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Search } from "lucide-react";

interface EmptyStateProps {
  message: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function EmptyState({
  message,
  buttonText,
  buttonLink,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto h-24 w-24 text-gray-300 mb-6 flex items-center justify-center">
          <Search className="w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
          Nothing here... yet! ✨
        </h3>
        <p className="text-gray-600 mb-8 text-lg">{message}</p>
        {buttonText && buttonLink && (
          <Link href={buttonLink} passHref>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
