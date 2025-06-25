'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import WelcomeQuest from '../components/WelcomeQuest';
import BenefitCard from '../components/BenefitCard';
import BenefitCardSkeleton from '../components/BenefitCardSkeleton';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  city: string;
  image: string;
  category: string;
  partner: { id: string; name: string };
  reviews: any[];
}

// Fallback mock data for when API is not available
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Yoga Retreat Weekend',
    description: 'Escape to a peaceful mountain retreat for a weekend of yoga, meditation, and wellness.',
    date: '2024-03-15',
    location: 'Mountain View Resort',
    city: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    category: 'Wellness',
    partner: { id: '1', name: 'Zen Wellness Center' },
    reviews: []
  },
  {
    id: '2',
    title: 'Gourmet Cooking Class',
    description: 'Learn to cook authentic Italian cuisine with a master chef in an intimate setting.',
    date: '2024-03-20',
    location: 'Culinary Institute',
    city: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    category: 'Food & Dining',
    partner: { id: '2', name: 'Taste of Italy' },
    reviews: []
  },
  {
    id: '3',
    title: 'Adventure Photography Workshop',
    description: 'Capture stunning landscapes while hiking through scenic trails with professional guidance.',
    date: '2024-03-25',
    location: 'National Park',
    city: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    category: 'Adventure',
    partner: { id: '3', name: 'Wild Lens Adventures' },
    reviews: []
  }
];

const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch('/api/events');
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  } catch (error) {
    console.log('Using fallback mock data due to API error:', error);
    // Return mock data when API fails
    return mockEvents;
  }
};

export default function HomeScreen() {
  const [isNewUser] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const { 
    data: events, 
    isLoading, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Only retry once
  });

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // Use events or fallback to mock data
  const displayEvents = events || mockEvents;

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {isNewUser && <WelcomeQuest />}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <BenefitCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State - but still show content with mock data
  if (error && !events) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <ErrorState 
              message="Showing sample data while we connect to our services." 
              onRetry={() => refetch()} 
            />
          </div>
          {isNewUser && <WelcomeQuest />}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockEvents.map((event) => (
              <BenefitCard
                key={event.id}
                image={event.image}
                category={event.category}
                rating={4.8}
                title={event.title}
                location={event.location}
                deal="50% OFF"
                tag={{ 
                  text: '🔥 Popular This Week', 
                  color: 'bg-black/60' 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Empty State
  if (!displayEvents || displayEvents.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <EmptyState 
            message="Nothing here... yet! ✨" 
            buttonText="Adjust Interests"
            onButtonPress={() => {/* Navigate to interests */}}
          />
        </div>
      </div>
    );
  }

  // Success State
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isNewUser && <WelcomeQuest />}
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Benefits</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock exclusive experiences and deals from premium partners. 
            From wellness retreats to culinary adventures, find your next unforgettable moment.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayEvents.map((event) => (
            <BenefitCard
              key={event.id}
              image={event.image}
              category={event.category}
              rating={4.8}
              title={event.title}
              location={event.location}
              deal="50% OFF"
              tag={{ 
                text: '🔥 Popular This Week', 
                color: 'bg-black/60' 
              }}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore More Benefits
          </button>
        </div>
      </div>
    </div>
  );
} 