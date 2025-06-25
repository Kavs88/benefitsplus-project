'use client';

import React from 'react';

interface TagProps {
  text: string;
  color: string;
}

export default function Tag({ text, color }: TagProps) {
  return (
    <div className={`px-3 py-1.5 rounded-full ${color} backdrop-blur-sm shadow-sm border border-white/20`}>
      <span className="text-white text-xs font-semibold tracking-wide">{text}</span>
    </div>
  );
} 