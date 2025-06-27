import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Tag,
  ArrowRight,
  Bookmark,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

// Mock user data
const mockUser = {
  name: "Sarah Chen",
  location: "San Francisco, CA",
  avatar:
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
};

// Mock saved events
const savedEvents = [
  {
    id: "1",
    title: "Mindful Mountain Retreat",
    date: "2024-03-15",
    location: "Aspen, Colorado",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    price: "$299",
    originalPrice: "$499",
  },
  {
    id: "2",
    title: "Artisan Coffee Workshop",
    date: "2024-03-20",
    location: "Portland, Oregon",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    price: "$89",
    originalPrice: "$119",
  },
];

// Mock saved discounts
const savedDiscounts = [
  {
    id: "1",
    title: "50% Off Yoga Classes",
    businessName: "Zen Wellness Studio",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    originalPrice: "$120",
    discountedPrice: "$60",
    expiration: "2024-04-15",
  },
  {
    id: "2",
    title: "Free Coffee with Pastry",
    businessName: "Artisan Coffee Co.",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    originalPrice: "$12",
    discountedPrice: "$6",
    expiration: "2024-03-30",
  },
];

// Mock suggested content
const suggestedContent = [
  {
    id: "1",
    title: "Sunset Photography Adventure",
    type: "event",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    price: "$149",
    originalPrice: "$199",
    reason: "Based on your location",
  },
  {
    id: "2",
    title: "30% Off Massage Therapy",
    type: "discount",
    businessName: "Serenity Spa",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    originalPrice: "$100",
    discountedPrice: "$70",
    reason: "Similar to saved wellness items",
  },
  {
    id: "3",
    title: "Cooking Class: Asian Fusion",
    type: "event",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    price: "$89",
    originalPrice: "$129",
    reason: "Popular in your area",
  },
];

function Placeholder({ message }: { message: string }) {
  return <div className="text-center py-8 text-gray-500">{message}</div>;
}

function WelcomeSection() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-8">
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src={mockUser.avatar}
          alt={mockUser.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
        />
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {mockUser.name}!</h1>
          <p className="text-emerald-100 flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{mockUser.location}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <Bookmark className="w-6 h-6" />
            <div>
              <p className="text-2xl font-bold">{savedEvents.length}</p>
              <p className="text-sm text-emerald-100">Saved Events</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <Tag className="w-6 h-6" />
            <div>
              <p className="text-2xl font-bold">{savedDiscounts.length}</p>
              <p className="text-sm text-emerald-100">Saved Discounts</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-emerald-100">Total Savings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SavedEventsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Saved Events</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {savedEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {savedEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="flex space-x-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm text-gray-500 line-through">
                        {event.originalPrice}
                      </p>
                      <p className="font-semibold text-gray-900">
                        {event.price}
                      </p>
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Placeholder message="You have no saved events yet." />
      )}
    </div>
  );
}

function SavedDiscountsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Saved Discounts</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {savedDiscounts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {savedDiscounts.map((discount) => (
            <div
              key={discount.id}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="flex space-x-4">
                <Image
                  src={discount.image}
                  alt={discount.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {discount.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {discount.businessName}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{discount.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Expires {discount.expiration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm text-gray-500 line-through">
                        {discount.originalPrice}
                      </p>
                      <p className="font-semibold text-gray-900">
                        {discount.discountedPrice}
                      </p>
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                      Claim Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Placeholder message="You have no saved discounts yet." />
      )}
    </div>
  );
}

function SuggestedSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Suggested for You</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {suggestedContent.map((item) => (
          <div
            key={item.id}
            className="group bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={128}
                height={128}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2">
                <div className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {item.type === "event" ? "Event" : "Discount"}
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {item.type === "event" ? item.location : item.businessName}
              </p>
              <p className="text-xs text-emerald-600 mb-3">{item.reason}</p>
              <div className="flex items-center justify-between">
                <div>
                  {item.type === "event" ? (
                    <>
                      <p className="text-sm text-gray-500 line-through">
                        {item.originalPrice}
                      </p>
                      <p className="font-semibold text-gray-900">
                        {item.price}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-500 line-through">
                        {item.originalPrice}
                      </p>
                      <p className="font-semibold text-gray-900">
                        {item.discountedPrice}
                      </p>
                    </>
                  )}
                </div>
                <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                  {item.type === "event" ? "View" : "Claim"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MemberDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        <SavedEventsSection />
        <SavedDiscountsSection />
        <SuggestedSection />
      </div>
    </div>
  );
}
