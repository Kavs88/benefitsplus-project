// FINAL CODE FOR: src/app/api/discounts/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const discount = await prisma.discount.findUnique({
      where: { id: params.id },
      include: { partner: true, categories: true },
    });
    if (!discount) return new NextResponse('Discount not found', { status: 404 });
    return NextResponse.json(discount);
  } catch (error) {
    console.error('[DISCOUNT_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}