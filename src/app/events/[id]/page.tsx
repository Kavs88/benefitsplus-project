// FINAL, PRODUCTION-READY CODE FOR: src/app/events/[id]/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DetailedEvent } from '@/src/types'; // Using our centralized type
import { formatDateTime } from '@/src/lib/utils'; // Using our centralized utility
import { Button } from '@/src/components/ui/button'; // Using our standardized Button
import { Badge } from '@/src/components/ui/badge'; // Using our standardized Badge
import { CalendarDays, Clock, MapPin, User, Tag } from 'lucide-react';

// This function fetches event details using a relative URL (works in dev and prod)
async function getEventDetails(id: string): Promise<DetailedEvent | null> {
  try {
    // Using a relative URL is best practice
    const response = await fetch(`/api/events/${id}`, {
      next: { revalidate: 60 } // Cache data for 60 seconds
    });
    
    if (!response.ok) {
      return null; // Return null if not found or other error
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching event details:', error);
    return null;
  }
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEventDetails(params.id);

  // Handle the case where the event is not found
  if (!event) {
    return (
      <main className="wrapper my-8 text-center">
        <h1 className="h1-bold mb-4">Event Not Found</h1>
        <p className="p-regular-20 text-gray-600 mb-6">The event you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/events">Back to All Events</Link>
        </Button>
      </main>
    );
  }

  return (
    <section className="wrapper my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column: Image */}
        <div className="w-full h-[300px] md:h-auto rounded-lg overflow-hidden shadow-lg bg-gray-200">
          <Image
            src={event.image || '/placeholder-event.jpg'} // Assuming 'image' field exists
            alt={event.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          <h1 className="h1-bold">{event.title}</h1>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">
              <User className="w-4 h-4 mr-2" />
              {event.organizer?.name || 'Unknown Organizer'}
            </Badge>
            {event.categories?.[0] && (
               <Badge>
                 <Tag className="w-4 h-4 mr-2" />
                 {event.categories[0].name}
               </Badge>
            )}
            <Badge variant="outline" className="text-lg font-semibold">
              {event.isFree ? 'FREE' : `$${event.price}`}
            </Badge>
          </div>

          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-gray-500" />
              <p className="p-medium-16">
                {formatDateTime(event.startDateTime).dateOnly} - {formatDateTime(event.endDateTime).dateOnly}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <p className="p-medium-16">
                {formatDateTime(event.startDateTime).timeOnly} - {formatDateTime(event.endDateTime).timeOnly}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <p className="p-medium-16">{event.location}</p>
            </div>
          </div>

          <div>
            <h3 className="p-bold-20">About This Event</h3>
            <p className="p-regular-16 mt-2 leading-relaxed">
              {event.description || 'No description available.'}
            </p>
          </div>

          <Button size="lg" className="w-full mt-4">
            Buy Ticket
          </Button>
        </div>
      </div>
    </section>
  );
}