import React from 'react';
import { getAllEvents } from '@/lib/actions/event.actions';
import { getAllDiscounts } from '@/lib/actions/discount.actions';
import { DetailedEvent, DetailedDiscount } from '@/types';
import EventCard from '@/components/shared/EventCard';
import DiscountCard from '@/components/shared/DiscountCard';
import EmptyState from '@/components/shared/EmptyState';

export default async function SimpleHomePage() {
  // Fetch data using server actions
  const events = await getAllEvents({ limit: 3 });
  const discounts = await getAllDiscounts({ limit: 3 });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> BenefitPlus</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover exclusive events and amazing discounts curated just for you.
              Connect with local partners and unlock incredible experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Start Exploring
              </button>
              <button className="text-gray-700 hover:text-blue-600 px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-200 hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these exciting events happening near you
            </p>
          </div>
          
          {events.length === 0 ? (
            <EmptyState
              message="No upcoming events at the moment. Check back soon for new experiences!"
              buttonText="Browse All Events"
              onButtonPress={() => window.location.href = '/events'}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event: DetailedEvent) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Discounts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Discounts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive offers and deals from our trusted partners
            </p>
          </div>
          
          {discounts.length === 0 ? (
            <EmptyState
              message="No featured discounts available right now. New offers coming soon!"
              buttonText="View All Discounts"
              onButtonPress={() => window.location.href = '/discounts'}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {discounts.map((discount: DetailedDiscount) => (
                <DiscountCard key={discount.id} discount={discount} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 