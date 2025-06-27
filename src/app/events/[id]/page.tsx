"use client";

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
import { Button } from "@/components/ui/button";
import { deleteEvent } from "@/lib/actions/event.actions";
import { getEventById } from "@/lib/actions/event.actions";
import { Event as IEvent } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EventDetailsPage = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = await getEventById(params.id);
        setEvent(fetchedEvent);
      } catch (error) {
        console.error("Failed to fetch event:", error);
        toast.error("Failed to load event details.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [params.id]);

  const handleDelete = async () => {
    if (!event) return;
    setIsDeleting(true);
    try {
      await deleteEvent({ eventId: event.id });
      toast.success("Event deleted successfully!");
      router.push("/events");
    } catch (error) {
      console.error("Failed to delete event:", error);
      toast.error("Failed to delete the event. Please try again.");
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the event you&apos;re looking for.
        </p>
        <Button onClick={() => router.push("/events")}>Go Back to Events</Button>
      </div>
    );
  }

  const isAuthor = session?.user?.id === event.partnerId;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={event.image || "/placeholder.png"}
            alt={event.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{event.description}</p>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-semibold">Date:</span>
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-semibold">Location:</span>
              <span>{event.location}</span>
            </div>
          </div>
          {isAuthor && (
            <div className="flex gap-4 mt-auto">
              <Link href={`/events/${event.id}/update`}>
                <Button>Edit Event</Button>
              </Link>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Delete"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the event.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;