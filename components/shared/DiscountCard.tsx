// PASTE THIS INTO components/shared/DiscountCard.tsx

import { IEvent } from "@/lib/database/models/event.model"; // We will create a new type for Discount soon
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

// Temporary: Using IEvent, but we'll replace this with a proper IDicount type
type DiscountCardProps = {
  discount: IEvent; // TODO: Replace with IDicount type
};

const DiscountCard = ({ discount }: DiscountCardProps) => {
  return (
    <Card className="flex w-full max-w-[400px] flex-col overflow-hidden transition-all hover:shadow-md">
      <Link href={`/discounts/${discount._id}`}>
        <CardHeader className="relative p-0">
          <div className="aspect-video overflow-hidden">
            <Image
              src={discount.imageUrl}
              alt={discount.title}
              width={400}
              height={225}
              className="w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-3 p-4">
          <Badge variant="destructive" className="absolute right-3 top-3 text-lg font-bold">
            {/* We will use a real field like discount.discountValue here later */}
            20% OFF
          </Badge>
          <p className="w-fit rounded-full bg-grey-500/10 px-3 py-1 text-xs text-grey-500">
            {discount.category.name}
          </p>
          <CardTitle className="line-clamp-2 text-xl font-bold">
            {discount.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {/* We will replace this with the offer's validity */}
            Valid until: {formatDateTime(discount.startDateTime).dateOnly}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-sm font-medium text-gray-700">
          {discount.organizer.firstName} {discount.organizer.lastName}
        </p>
        <Link href={`/discounts/${discount._id}`} className="text-sm font-semibold text-primary">
          Get Offer
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DiscountCard;