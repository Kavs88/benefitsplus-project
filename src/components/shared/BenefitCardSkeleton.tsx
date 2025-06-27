"use client";

import React from "react";

export default function BenefitCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />

      {/* Content skeleton */}
      <div className="p-6">
        {/* Category and rating skeleton */}
        <div className="flex items-center justify-between mb-3">
          <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse" />
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-8 animate-pulse" />
          </div>
        </div>

        {/* Title skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-6 bg-gray-200 rounded w-full animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>

        {/* Location skeleton */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
        </div>

        {/* Deal skeleton */}
        <div className="h-8 bg-gray-200 rounded-lg w-24 animate-pulse" />
      </div>
    </div>
  );
}
