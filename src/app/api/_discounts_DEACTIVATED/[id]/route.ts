// FINAL AND CORRECT CODE FOR: src/app/api/discounts/[id]/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// FIX: Next.js 15 requires params to be a Promise
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const discount = await prisma.discount.findUnique({
      where: { id },
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
    console.error('[DISCOUNT_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}