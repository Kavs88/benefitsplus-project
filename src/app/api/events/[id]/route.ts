import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { Session } from "next-auth";

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const event = await prisma.event.findUnique({
      where: { id },
      include: { 
        partner: true, // This is the organizer
        categories: true 
      },
    });
    
    if (!event) {
      return new Response("Event not found", { status: 404 });
    }
    
    return NextResponse.json(event);
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
} 