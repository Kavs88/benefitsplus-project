"use server";
import { revalidatePath } from 'next/cache';
import { prisma } from '@/src/lib/db';
import { EventFormValues } from '@/src/types';

export async function createEvent({ event, userId }: { event: EventFormValues, userId:string }) {
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
        organizer: { connect: { id: userId } },
      },
    });
    if (newEvent) { revalidatePath('/events'); }
    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.error('Error creating event:', error);
    throw new Error('Failed to create event.');
  }
}

export async function getAllEvents({ limit }: { limit: number }) {
  try {
    const events = await prisma.event.findMany({
      take: limit,
      orderBy: { startDateTime: 'asc' },
      include: { organizer: true, categories: true },
    });
    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
} 