// FINAL, PRODUCTION-READY CODE FOR: src/app/discounts/[id]/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DetailedDiscount } from '@/types'; // Using our centralized type
import { formatDateTime } from '@/lib/utils'; // Using our centralized utility
import { Button } from '@/components/ui/button'; // Using our standardized Button
import { Badge } from '@/components/ui/badge'; // Using our standardized Badge
import { CalendarDays, User, Tag } from 'lucide-react';

// This function fetches discount details using a relative URL (works in dev and prod)
async function getDiscountDetails(id: string): Promise<DetailedDiscount | null> {
  try {
    // Using a relative URL is best practice for server components
    const response = await fetch(`/api/discounts/${id}`, {
      next: { revalidate: 60 } // Cache data for 60 seconds
    });
    
    if (!response.ok) {
      return null; // Return null if not found or other error
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching discount details:', error);
    return null;
  }
}

export default async function DiscountDetailPage({ params }: { params: { id: string } }) {
  const discount = await getDiscountDetails(params.id);

  // Handle the case where the discount is not found
  if (!discount) {
    return (
      <main className="wrapper my-8 text-center">
        <h1 className="h1-bold mb-4">Discount Not Found</h1>
        <p className="p-regular-20 text-gray-600 mb-6">The discount you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </main>
    );
  }

  return (
    <section className="wrapper my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column: Image */}
        <div className="w-full h-[300px] md:h-auto rounded-lg overflow-hidden shadow-lg bg-gray-200">
          <Image
            src={discount.imageUrl || '/placeholder-discount.jpg'}
            alt={discount.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          <h1 className="h1-bold">{discount.title}</h1>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="destructive" className="text-lg font-semibold">
              {discount.discountValue}
            </Badge>
            <Badge variant="secondary">
              <User className="w-4 h-4 mr-2" />
              {discount.partner?.name || 'Unknown Partner'}
            </Badge>
            {discount.categories?.[0] && (
               <Badge>
                 <Tag className="w-4 h-4 mr-2" />
                 {discount.categories[0].name}
               </Badge>
            )}
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <CalendarDays className="w-5 h-5 text-gray-500" />
            <p className="p-medium-16">
              Valid from {formatDateTime(discount.startDate).dateOnly} to {formatDateTime(discount.endDate).dateOnly}
            </p>
          </div>

          <div>
            <h3 className="p-bold-20">About This Offer</h3>
            <p className="p-regular-16 mt-2 leading-relaxed">
              {discount.description || 'No description available.'}
            </p>
          </div>
          
          <div>
            <h3 className="p-bold-20">Terms & Conditions</h3>
            <p className="p-regular-16 mt-2 leading-relaxed">
              {discount.termsAndConditions || 'No terms provided.'}
            </p>
          </div>

          <Button size="lg" className="w-full mt-4">
            Get Discount Code
          </Button>
        </div>
      </div>
    </section>
  );
}