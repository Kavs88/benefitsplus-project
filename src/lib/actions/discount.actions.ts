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

export async function getAllDiscounts() {
  try {
    const discounts = await prisma.discount.findMany({
      include: {
        partner: true,
        categories: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return discounts;
  } catch (error) {
    handleError(error);
  }
}

export async function getDiscountById(
  id: string
): Promise<DiscountWithPartnerAndCategories | null> {
  try {
    const discount = await prisma.discount.findUnique({
      where: { id },
      include: {
        partner: true,
        categories: true,
      },
    });
    if (!discount) return null;
    return discount;
  } catch (error) {
    handleError(error);
    return null;
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

export async function deleteDiscount({ discountId, path }: { discountId: string, path: string }) {
  try {
    const discount = await prisma.discount.findUnique({ where: { id: discountId } });
    if (!discount) throw new Error("Discount not found");
    await prisma.discount.delete({ where: { id: discountId } });
    revalidatePath(path);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete discount:", error);
    throw error;
  }
} 