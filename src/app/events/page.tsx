// FINAL CODE FOR: src/app/events/page.tsx

import React from 'react';
import { getAllEvents } from '@/lib/actions/event.actions';
import { DetailedEvent } from '@/types';
import EmptyState from "@/components/shared/EmptyState";
import EventCard from "@/components/shared/EventCard";

const EventsPage = async () => {
  const events: DetailedEvent[] = await getAllEvents({ limit: 100 }); // Fetch all events

  if (events.length === 0) {
    return (
      <EmptyState
        message="Looks like there are no events scheduled right now. Check back soon!"
        buttonText="Go Home"
        buttonLink="/"
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((event: DetailedEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;