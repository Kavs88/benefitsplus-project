"use server";

import { prisma } from '@/lib/db';
import { Category } from '@prisma/client';

export async function getAllCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
} 