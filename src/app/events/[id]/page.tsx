// FINAL, PRODUCTION-READY CODE FOR: src/app/events/[id]/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DetailedEvent } from "@/types";
import { formatDateTime } from "@/lib/utils";
import { getEventById, deleteEvent } from "@/lib/actions/event.actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin, User, Tag } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default async function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const event: DetailedEvent | null = await getEventById(params.id);

  if (!event) {
    return (
      <main className="wrapper my-8 text-center">
        <h1 className="h1-bold mb-4">Event Not Found</h1>
        <p className="p-regular-20 text-gray-600 mb-6">
          The event you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Button asChild>
          <Link href="/events">Back to All Events</Link>
        </Button>
      </main>
    );
  }

  const isOrganizer = userId === event.partnerId;

  return (
    <section className="wrapper my-8">
      <div className="flex justify-between items-start">
        <h1 className="h1-bold mb-4">{event.title}</h1>
        {isOrganizer && (
          <div className="flex gap-4">
            <Button asChild>
              <Link href={`/events/${event.id}/update`}>Edit Event</Link>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Event</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the event.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <form
                      action={async () => {
                        "use server";
                        await deleteEvent({ eventId: event.id });
                      }}
                    >
                      <Button type="submit" variant="destructive">
                        Delete
                      </Button>
                    </form>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="w-full h-[300px] md:h-auto rounded-lg overflow-hidden shadow-lg bg-gray-200">
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-gray-100 text-gray-800">
              <User className="w-4 h-4 mr-2" />
              {event.partner?.name || "Unknown Organizer"}
            </Badge>
            {event.categories?.[0] && (
              <Badge className="bg-blue-100 text-blue-800">
                <Tag className="w-4 h-4 mr-2" />
                {event.categories[0].name}
              </Badge>
            )}
            <Badge className="bg-green-100 text-green-800 text-lg font-semibold">
              {event.isFree ? "FREE" : `$${event.price}`}
            </Badge>
          </div>

          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-gray-500" />
              <p className="p-medium-16">
                {formatDateTime(event.startDateTime).dateOnly} -{" "}
                {formatDateTime(event.endDateTime).dateOnly}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <p className="p-medium-16">
                {formatDateTime(event.startDateTime).timeOnly} -{" "}
                {formatDateTime(event.endDateTime).timeOnly}
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
              {event.description || "No description available."}
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
