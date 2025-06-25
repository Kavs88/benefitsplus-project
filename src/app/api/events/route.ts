import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch events from database with partner information
    const events = await prisma.event.findMany({
      include: {
        partner: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        reviews: {
          select: {
            id: true,
            rating: true,
            comment: true,
            author: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
        _count: {
          select: {
            reviews: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform data to match frontend expectations
    const transformedEvents = events.map(event => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date.toISOString(),
      location: event.location,
      city: event.city,
      image: event.image,
      category: 'Wellness', // You might want to add a category field to your schema
      partner: {
        id: event.partner.id,
        name: event.partner.name || 'Unknown Partner',
        image: event.partner.image,
      },
      reviews: event.reviews,
      reviewCount: event._count.reviews,
      averageRating: event.reviews.length > 0 
        ? event.reviews.reduce((acc, review) => acc + review.rating, 0) / event.reviews.length
        : 0,
    }));

    return NextResponse.json(transformedEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, description, date, location, city, image } = await request.json();

    // Validate required fields
    if (!title || !date || !location || !city) {
      return NextResponse.json(
        { error: 'Title, date, location, and city are required' },
        { status: 400 }
      );
    }

    // Check if user is a partner
    if (session.user.role !== 'partner') {
      return NextResponse.json(
        { error: 'Only partners can create events' },
        { status: 403 }
      );
    }

    // Create event
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        city,
        image,
        partnerId: session.user.id,
      },
      include: {
        partner: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
} 