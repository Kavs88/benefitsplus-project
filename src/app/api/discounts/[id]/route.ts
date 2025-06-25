import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const discount = await prisma.discount.findUnique({
      where: { id: params.id },
      include: {
        partner: true,
        categories: true,
      },
    });

    if (!discount) {
      return new NextResponse('Discount not found', { status: 404 });
    }

    return NextResponse.json(discount);
  } catch (error) {
    console.error('Error fetching discount:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 