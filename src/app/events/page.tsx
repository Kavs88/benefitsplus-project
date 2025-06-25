import React from 'react';
import { Search } from 'lucide-react';
import Link from "next/link";
import { PrismaClient, Event } from '@prisma/client';
import EventCard from '@/components/EventCard';

const prisma = new PrismaClient();

async function getEvents(): Promise<Event[]> {
  const events = await prisma.event.findMany();
  return events;
}

const categories = [
  'All Categories',
  'Wellness',
  'Food & Drink',
  'Adventure',
  'Culture',
  'Learning',
  'Relaxation'
];

const cities = [
  'All Cities',
  'Aspen, Colorado',
  'Portland, Oregon',
  'Sedona, Arizona',
  'San Francisco, CA',
  'Denver, CO',
  'New York, NY'
];

function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
      <p className="text-gray-600 mb-6">Try adjusting your filters or check back later for new events.</p>
      <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200">
        Clear Filters
      </button>
    </div>
  );
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-primary/10 to-background mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Discover Events</h1>
        <p className="text-lg md:text-xl text-center mb-6 max-w-2xl text-muted-foreground">Explore exclusive events curated for you. Find something exciting and join the community!</p>
        <Link href="/" className="text-primary underline font-medium">Back to Home</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Events</h1>
        <p className="text-gray-600 mb-6">Discover curated experiences and events near you.</p>
        <form className="flex flex-col md:flex-row gap-4 mb-8">
          <select className="rounded-lg border px-4 py-2 text-gray-700">
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <select className="rounded-lg border px-4 py-2 text-gray-700">
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search events..."
            className="rounded-lg border px-4 py-2 flex-1"
          />
        </form>
        {events.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard 
                key={event.id}
                name={event.title}
                date={new Date(event.date).toLocaleDateString()}
                location={event.location}
                description={event.description || ''}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
} 