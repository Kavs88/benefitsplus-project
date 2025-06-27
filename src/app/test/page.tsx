"use client";

import React from "react";
import Link from "next/link";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          BenefitPlus Test Page
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Basic Components Test
          </h2>
          <p className="text-gray-600 mb-4">
            This page tests if the basic styling and components are working
            correctly.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">Card 1</h3>
              <p className="text-blue-700">This is a test card</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900">Card 2</h3>
              <p className="text-purple-700">This is another test card</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900">Card 3</h3>
              <p className="text-green-700">This is a third test card</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
