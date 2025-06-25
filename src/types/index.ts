import { Prisma } from '@prisma/client';

const eventWithDetails = Prisma.validator<Prisma.EventDefaultArgs>()({
  include: { partner: true, categories: true },
});
export type DetailedEvent = Prisma.EventGetPayload<typeof eventWithDetails>;

const discountWithDetails = Prisma.validator<Prisma.DiscountDefaultArgs>()({
  include: { partner: true, categories: true },
});
export type DetailedDiscount = Prisma.DiscountGetPayload<typeof discountWithDetails>; 