import { Prisma } from '@prisma/client';
import { z } from "zod";

const eventWithDetails = Prisma.validator<Prisma.EventDefaultArgs>()({
  include: {
    partner: true,
    categories: true,
  },
});
export type DetailedEvent = Prisma.EventGetPayload<typeof eventWithDetails>;

const discountWithDetails = Prisma.validator<Prisma.DiscountDefaultArgs>()({
  include: { partner: true, categories: true },
});
export type DiscountWithPartnerAndCategories = Prisma.DiscountGetPayload<typeof discountWithDetails> & {
  partner: User;
  categories: Category[];
};

export type DetailedDiscount = Prisma.DiscountGetPayload<typeof discountWithDetails> & {
  partner: User;
  categories: Category[];
  imageUrl: string;
  discountValue: string;
  termsAndConditions: string;
};

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  location: z.string().min(3, 'Location is required.'),
  imageUrl: z.string().url('Must be a valid URL.'),
  startDateTime: z.string(),
  endDateTime: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  category: z.string(),
});
export type EventFormValues = z.infer<typeof eventFormSchema>;

// FILE: src/types/index.ts (or types/index.ts)

// ... (keep all your other exports like eventFormSchema, etc.)

export const discountFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters long.').max(400, 'Description cannot exceed 400 characters.'),
  discountValue: z.string().min(1, 'Discount value is required.'),
  imageUrl: z.string().url('A valid image URL is required.'),
  startDate: z.string().min(1, { message: 'Start date is required.' }),
  endDate: z.string().min(1, { message: 'End date is required.' }),
  termsAndConditions: z.string().optional(),
  category: z.string().min(1, 'Category is required.'),
}).refine(data => {
  return new Date(data.endDate) >= new Date(data.startDate);
}, {
  message: "End date cannot be before the start date.",
  path: ["endDate"], 
});

// Use z.infer for a robust, automatically generated type
export type DiscountFormValues = z.infer<typeof discountFormSchema>;