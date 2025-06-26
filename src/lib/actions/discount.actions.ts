"use server";

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { DiscountFormValues } from '@/types';
import { DetailedDiscount } from '@/types';

export async function createDiscount({ discount, userId }: { discount: DiscountFormValues, userId: string }) {
  try {
    const newDiscount = await prisma.discount.create({
      data: {
        ...discount,
        startDate: new Date(discount.startDate),
        endDate: new Date(discount.endDate),
        partner: { connect: { id: userId } },
        // Category connection will be handled separately
      },
    });
    revalidatePath('/discounts');
    return JSON.parse(JSON.stringify(newDiscount));
  } catch (error) {
    console.error('Error creating discount:', error);
    throw new Error('Failed to create discount.');
  }
}

export async function getAllDiscounts({ limit }: { limit: number }): Promise<DetailedDiscount[]> {
  try {
    const discounts = await prisma.discount.findMany({
      take: limit,
      orderBy: { startDate: 'asc' },
      include: { partner: true, categories: true },
    });
    return JSON.parse(JSON.stringify(discounts));
  } catch (error) {
    console.error('Error fetching discounts:', error);
    return [];
  }
} 