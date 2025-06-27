"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { EventFormValues } from "@/types";

export async function createEvent({
  event,
  userId,
}: {
  event: EventFormValues;
  userId: string;
}) {
  try {
    const newEvent = await prisma.event.create({
      data: {
        title: event.title,
        description: event.description,
        location: event.location,
        imageUrl: event.imageUrl,
        startDateTime: new Date(event.startDateTime),
        endDateTime: new Date(event.endDateTime),
        price: event.price,
        isFree: event.isFree,
        partner: { connect: { id: userId } },
      },
    });
    if (newEvent) {
      revalidatePath("/events");
    }
    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.error("Error creating event:", error);
    throw new Error("Failed to create event.");
  }
}

export async function getAllEvents({ limit }: { limit: number }) {
  try {
    const events = await prisma.event.findMany({
      take: limit,
      orderBy: { startDateTime: "asc" },
      include: { partner: true, categories: true },
    });
    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEventById(eventId: string) {
  try {
    const event = await prisma.event.findUnique({
      where: { id: eventId },
      include: { partner: true, categories: true },
    });

    if (!event) {
      throw new Error("Event not found");
    }

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    throw new Error("Failed to fetch event.");
  }
}

export async function updateEvent({
  event,
  userId,
}: {
  event: EventFormValues & { id: string };
  userId: string;
}) {
  try {
    const eventToUpdate = await prisma.event.findUnique({
      where: { id: event.id },
    });

    if (!eventToUpdate || eventToUpdate.partnerId !== userId) {
      throw new Error("Unauthorized or event not found");
    }

    const updatedEvent = await prisma.event.update({
      where: { id: event.id },
      data: {
        title: event.title,
        description: event.description,
        location: event.location,
        imageUrl: event.imageUrl,
        startDateTime: new Date(event.startDateTime),
        endDateTime: new Date(event.endDateTime),
        price: event.price,
        isFree: event.isFree,
      },
    });

    if (updatedEvent) {
      revalidatePath(`/events/${event.id}`);
      revalidatePath("/events");
    }

    return JSON.parse(JSON.stringify(updatedEvent));
  } catch (error) {
    console.error("Error updating event:", error);
    throw new Error("Failed to update event.");
  }
}

export async function deleteEvent({ eventId }: { eventId: string }) {
  try {
    await prisma.event.delete({
      where: { id: eventId },
    });
    revalidatePath("/events");
  } catch (error) {
    console.error("Error deleting event:", error);
    throw new Error("Failed to delete event.");
  }
}

export async function getEventsByOrganizer({ userId }: { userId: string }) {
  try {
    const events = await prisma.event.findMany({
      where: {
        partnerId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error("Error fetching events by organizer:", error);
    return [];
  }
}
