import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star, 
  Heart, 
  Share2, 
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  ChevronRight,
  User
} from 'lucide-react';
import { Card } from "@/components/ui/card";

// Mock event data
const mockEvent = {
  id: '1',
  title: 'Mindful Mountain Retreat',
  date: '2024-03-15',
  time: '9:00 AM',
  location: 'Aspen, Colorado',
  address: '123 Mountain View Drive, Aspen, CO 81611',
  category: 'Wellness',
  image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop',
  price: '$299',
  originalPrice: '$499',
  attendees: 24,
  maxAttendees: 30,
  tag: 'Most Popular',
  description: `Escape to a peaceful mountain retreat for a weekend of yoga, meditation, and wellness. This transformative experience combines the healing power of nature with expert-led mindfulness practices.

What's Included:
• 3 days of guided yoga and meditation sessions
• Accommodation in luxury mountain cabins
• Organic farm-to-table meals
• Guided nature walks and forest bathing
• Wellness workshops and mindfulness training
• Access to spa facilities and hot springs

Perfect for anyone looking to disconnect from the digital world and reconnect with themselves. Whether you're a beginner or experienced practitioner, this retreat offers something for everyone.`,
  organizer: {
    name: 'Zen Wellness Center',
    email: 'hello@zenwellness.com',
    phone: '+1 (555) 123-4567',
    website: 'www.zenwellness.com',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop&crop=face'
  },
  reviews: [
    {
      id: 'r1',
      author: 'Sarah Chen',
      rating: 5,
      comment: 'Amazing experience! The yoga retreat was exactly what I needed.',
    },
    {
      id: 'r2',
      author: 'Marcus Rodriguez',
      rating: 4,
      comment: 'Incredible retreat! The meditation sessions were transformative.',
    },
  ]
};

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        <img 
          src={review.avatar} 
          alt={review.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{review.author}</h4>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-3">{review.date}</p>
          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <section className="w-full">
        <img
          src={mockEvent.image}
          alt={mockEvent.title}
          className="w-full h-64 sm:h-96 object-cover object-center"
        />
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{mockEvent.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {mockEvent.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {mockEvent.location}
          </span>
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">{mockEvent.description}</p>
        <Card className="mb-8">
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2 text-gray-900">Location</h2>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[Google Maps Placeholder]</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2 text-gray-900">Reviews</h2>
            {mockEvent.reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              <ul className="space-y-4">
                {mockEvent.reviews.map((review) => (
                  <li key={review.id} className="flex gap-3 items-start">
                    <User className="w-8 h-8 text-gray-400 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{review.author}</span>
                        <span className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`}
                              fill={i < review.rating ? "#facc15" : "none"}
                            />
                          ))}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-1">{review.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      </section>
    </main>
  );
} 