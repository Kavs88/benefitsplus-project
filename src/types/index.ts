import { Prisma } from '@prisma/client';
import { z } from "zod";

const eventWithDetails = Prisma.validator<Prisma.EventDefaultArgs>()({
  include: { partner: true, categories: true },
});
export type DetailedEvent = Prisma.EventGetPayload<typeof eventWithDetails>;

const discountWithDetails = Prisma.validator<Prisma.DiscountDefaultArgs>()({
  include: { partner: true, categories: true },
});
export type DetailedDiscount = Prisma.DiscountGetPayload<typeof discountWithDetails>;

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