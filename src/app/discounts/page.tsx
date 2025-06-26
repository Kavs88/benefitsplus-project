import { getAllDiscounts } from '@/lib/actions/discount.actions';
import { DiscountWithPartnerAndCategories } from '@/types';
import DiscountCard from '@/components/shared/DiscountCard';
import EmptyState from '@/components/shared/EmptyState';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const DiscountsPage = async () => {
  const discounts: DiscountWithPartnerAndCategories[] = await getAllDiscounts();

  const discountsCollection = (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
      {discounts.map((discount) => (
        <DiscountCard key={discount.id} discount={discount} />
      ))}
    </div>
  );

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center gap-8 sm:justify-between">
          <h1 className="h1-bold text-center sm:text-left">Discounts</h1>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/discounts/create">Create Discount</Link>
          </Button>
        </div>
      </section>

      <section id="discounts" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        {discounts && discounts.length > 0 ? (
          discountsCollection
        ) : (
          <EmptyState
            title="No Discounts Found"
            subtitle="Get started by creating a new one."
            buttonLink="/discounts/create"
            buttonText="Create Discount"
          />
        )}
      </section>
    </>
  );
};

export default DiscountsPage; 