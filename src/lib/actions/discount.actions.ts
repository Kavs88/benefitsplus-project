import { PrismaClient } from '@prisma/client';
import { DetailedDiscount } from '@/types';

const prisma = new PrismaClient();

export async function getAllDiscounts({ limit }: { limit: number }): Promise<DetailedDiscount[]> {
  try {
    const discounts = await prisma.discount.findMany({
      take: limit,
      orderBy: {
        startDate: 'asc'
      },
      include: {
        partner: true,
        categories: true
      }
    });
    
    return discounts as DetailedDiscount[];
  } catch (error) {
    console.error('Error fetching discounts:', error);
    return [];
  }
} 