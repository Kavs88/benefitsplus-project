'use client';

import React from 'react';
import { Star, MapPin, Heart } from 'lucide-react';
import Tag from './Tag';

interface BenefitCardProps {
  image: string;
  category: string;
  rating: number;
  title: string;
  location: string;
  deal: string;
  tag?: {
    text: string;
    color: string;
  };
}

export default function BenefitCard({
  image,
  category,
  rating,
  title,
  location,
  deal,
  tag
}: BenefitCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <div className="absolute top-3 left-3">
            <Tag text={tag.text} color={tag.color} />
          </div>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category and Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-900">{rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        {/* Deal */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg inline-block shadow-sm">
          <span className="text-white font-bold text-sm">{deal}</span>
        </div>
      </div>
    </div>
  );
} 