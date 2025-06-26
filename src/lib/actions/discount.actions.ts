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

export type UpdateDiscountArgs = {
  discount: {
    id: string;
    title: string;
    description: string;
    discountValue: string;
    imageUrl: string;
    startDate: string;
    endDate: string;
    termsAndConditions: string;
    category: string;
    // Add any other fields as needed
  };
  userId: string;
};

export async function updateDiscount({ discount, userId }: UpdateDiscountArgs) {
  try {
    // 1. Find the original discount
    const original = await prisma.discount.findUnique({
      where: { id: discount.id },
    });
    if (!original) {
      throw new Error("Discount not found");
    }

    // 2. Security check: Only the author can update
    if (original.partnerId !== userId) {
      throw new Error("Unauthorized: You cannot edit this discount");
    }

    // 3. Update the discount
    const updated = await prisma.discount.update({
      where: { id: discount.id },
      data: {
        title: discount.title,
        description: discount.description,
        discountValue: discount.discountValue,
        imageUrl: discount.imageUrl,
        startDate: discount.startDate,
        endDate: discount.endDate,
        termsAndConditions: discount.termsAndConditions,
        category: discount.category,
        // Add any other fields as needed
      },
    });

    // 4. Revalidate relevant paths
    revalidatePath("/discounts");
    revalidatePath(`/discounts/${discount.id}`);

    // 5. Return a plain object
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to update discount:", error);
    throw error;
  }
} 