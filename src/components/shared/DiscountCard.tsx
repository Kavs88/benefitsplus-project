import React from "react";
import { DetailedDiscount } from "../../types";
import { Card } from "../ui/card";

interface DiscountCardProps {
  discount: DetailedDiscount;
}

const DiscountCard: React.FC<DiscountCardProps> = ({ discount }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{discount.title}</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Offer:</span> {discount.offer}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Valid:</span>{" "}
          {new Date(discount.startDate).toLocaleDateString()} -{" "}
          {new Date(discount.endDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-sm mb-4">{discount.description}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Get Discount
        </button>
      </div>
    </Card>
  );
};

export default DiscountCard;
