import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        partner: true, // This is the organizer
        categories: true,
      },
    });

    if (!event) {
      return new Response("Event not found", { status: 404 });
    }

    return NextResponse.json(event);
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
}
