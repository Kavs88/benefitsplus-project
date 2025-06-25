import React from 'react';
import { Search, Filter, MapPin, Calendar, Tag, Clock } from 'lucide-react';
import { Card } from "@/components/ui/card";

// Mock data for discounts
const mockDiscounts = [
  {
    id: '1',
    title: '20% Off Spa Treatments',
    business: 'Zen Wellness Center',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    expires: '2024-04-30',
    category: 'Wellness',
    urgency: 'Limited Time',
  },
  {
    id: '2',
    title: 'Free Coffee with Breakfast',
    business: 'Taste of Italy',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    expires: '2024-05-15',
    category: 'Food & Drink',
    urgency: 'New',
  },
  {
    id: '3',
    title: '15% Off Adventure Tours',
    business: 'Wild Lens Adventures',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    expires: '2024-06-01',
    category: 'Adventure',
    urgency: 'Popular',
  },
];

const categories = ['All', 'Wellness', 'Food & Drink', 'Learning', 'Adventure', 'Culture'];
const cities = ['All Cities', 'San Francisco', 'Portland', 'Sedona', 'Denver', 'Seattle', 'Online'];

function DiscountCard({ discount }: { discount: any }) {
  const daysUntilExpiry = Math.ceil((new Date(discount.expiration).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <Card className="overflow-hidden group">
      <img
        src={discount.image}
        alt={discount.title}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-200"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
            {discount.category}
          </span>
          <span className="ml-auto bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {discount.urgency}
          </span>
        </div>
        <h2 className="font-semibold text-lg mb-1 text-gray-900 line-clamp-2">{discount.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{discount.business}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Expires:</span>
          <span className="font-medium text-gray-900">{discount.expires}</span>
        </div>
      </div>
    </Card>
  );
}

function FilterBar() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search discounts..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex gap-4">
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white">
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white">
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          
          <button className="flex items-center space-x-2 px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Tag className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">No discounts found</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Try adjusting your filters or search terms to find amazing deals near you.
      </p>
      <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
        Clear Filters
      </button>
    </div>
  );
}

export default function DiscountsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Discounts</h1>
        <p className="text-gray-600 mb-6">Unlock exclusive deals and offers from our partners.</p>
        {mockDiscounts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">No discounts available right now. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDiscounts.map((discount) => (
              <DiscountCard key={discount.id} discount={discount} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
} 