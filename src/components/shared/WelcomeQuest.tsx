"use client";

import React from "react";
import { CheckCircle, Circle, Sparkles } from "lucide-react";

const tasks = [
  { label: "Pick 3 interests to supercharge your feed.", done: false },
  { label: "Save your first deal.", done: false },
  { label: "View this week's featured event.", done: false },
];

export default function WelcomeQuest() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
        <h3 className="text-xl font-bold text-gray-900">
          Your Welcome Quest ✨
        </h3>
      </div>

      <div className="space-y-3 mb-4">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="flex items-center p-3 bg-white/50 rounded-lg"
          >
            {task.done ? (
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
            )}
            <span
              className={`text-base ${task.done ? "text-gray-900 font-semibold" : "text-gray-700"}`}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white/50 rounded-full h-3 overflow-hidden">
        <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/3 transition-all duration-500" />
      </div>

      <p className="text-sm text-gray-600 mt-3 text-center">
        Complete your quest to unlock exclusive benefits! 🎉
      </p>
    </div>
  );
}
