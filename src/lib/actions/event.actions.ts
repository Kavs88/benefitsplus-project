import { PrismaClient } from '@prisma/client';
import { DetailedEvent } from '@/types';

const prisma = new PrismaClient();

export async function getAllEvents({ limit }: { limit: number }): Promise<DetailedEvent[]> {
  try {
    const events = await prisma.event.findMany({
      take: limit,
      orderBy: {
        date: 'asc'
      },
      include: {
        partner: true,
        categories: true
      }
    });
    
    return events as DetailedEvent[];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
} 