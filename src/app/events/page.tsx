// FINAL CODE FOR: src/app/events/page.tsx

import React from 'react';
import { Search } from 'lucide-react';
import Link from "next/link";
import { PrismaClient, Event } from '@prisma/client';
import EmptyState from "@/components/shared/EmptyState";
import EventCard from "@/components/shared/EventCard";

const prisma = new PrismaClient();

const EventsPage = async () => {
  const events = await prisma.event.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  if (events.length === 0) {
    return (
      <EmptyState
        message="Looks like there are no events scheduled right now. Check back soon!"
        buttonText="Go Home"
        onButtonPress={() => window.location.href = '/'}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;