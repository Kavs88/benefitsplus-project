import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getEventsByOrganizer } from '@/lib/actions/event.actions';
import { DetailedEvent } from '@/types';
import { Button } from '@/components/ui/button';

export default async function MyEventsPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return (
      <div className="wrapper my-8 text-center">
        <h1 className="h2-bold">Access Denied</h1>
        <p className="mt-4">You must be logged in to view this page.</p>
        <Button asChild className="mt-6">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  const myEvents: DetailedEvent[] = await getEventsByOrganizer({ userId });

  return (
    <div className="wrapper my-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="h1-bold">My Created Events</h1>
        <Button asChild>
          <Link href="/events/create">Create New Event</Link>
        </Button>
      </div>

      {myEvents.length > 0 ? (
        <table className="w-full text-left shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold">Event Title</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myEvents.map((event) => (
              <tr key={event.id} className="border-b">
                <td className="p-4">{event.title}</td>
                <td className="p-4">{event.isFree ? 'FREE' : `$${event.price}`}</td>
                <td className="p-4 text-right">
                  <Link href={`/events/${event.id}/update`} className="text-blue-600 hover:underline mr-4">
                    Edit
                  </Link>
                  <Link href={`/events/${event.id}`} className="text-red-600 hover:underline">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-16 border rounded-lg">
          <h2 className="h2-bold">No Events Yet</h2>
          <p className="mt-2">You haven't created any events. Let's change that!</p>
        </div>
      )}
    </div>
  );
} 