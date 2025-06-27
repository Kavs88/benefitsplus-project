import React from "react";
import {
  Plus,
  Tag,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Star,
  Mail,
} from "lucide-react";
import Image from "next/image";

// Mock partner data
const mockPartner = {
  name: "Zen Wellness Center",
  avatar:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face",
};

// Mock events created
const eventsCreated = [
  {
    id: "1",
    title: "Mindful Mountain Retreat",
    date: "2024-03-15",
    location: "Aspen, Colorado",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    attendees: 24,
    maxAttendees: 30,
  },
  {
    id: "2",
    title: "Yoga & Meditation Retreat",
    date: "2024-04-01",
    location: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    attendees: 18,
    maxAttendees: 25,
  },
];

// Mock discounts created
const discountsCreated = [
  {
    id: "1",
    title: "50% Off Yoga Classes",
    businessName: "Zen Wellness Studio",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    expiration: "2024-04-15",
  },
];

// Mock reviews/inquiries
const reviews = [
  {
    id: 1,
    user: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2024-02-15",
    text: "Thank you for the amazing retreat! Our team loved it.",
  },
  {
    id: 2,
    user: "Marcus Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    date: "2024-02-10",
    text: "Great experience, but would love more vegan options next time.",
  },
];

const inquiries = [
  {
    id: 1,
    name: "Emma Thompson",
    email: "emma@example.com",
    message: "Hi, do you offer group discounts for companies?",
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
          src={mockPartner.avatar}
          alt={mockPartner.name}
          width={40}
          height={40}
          className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
        />
        <div>
          <h1 className="text-3xl font-bold">Welcome, {mockPartner.name}!</h1>
          <p className="text-emerald-100">Partner Dashboard</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 font-semibold hover:bg-white/20 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Create Event</span>
        </button>
        <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 font-semibold hover:bg-white/20 transition-colors">
          <Tag className="w-5 h-5" />
          <span>Create Discount</span>
        </button>
      </div>
    </div>
  );
}

function EventsCreatedSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Events Created</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {eventsCreated.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {eventsCreated.map((event) => (
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
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>
                        {event.attendees}/{event.maxAttendees} attendees
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Placeholder message="No events created yet." />
      )}
    </div>
  );
}

function DiscountsCreatedSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Discounts Created</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {discountsCreated.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {discountsCreated.map((discount) => (
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
                      <Calendar className="w-4 h-4" />
                      <span>Expires {discount.expiration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Placeholder message="No discounts created yet." />
      )}
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Incoming Reviews
      </h2>
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-100 pb-6 last:border-b-0"
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={review.avatar}
                  alt={review.user}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {review.user}
                    </h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Placeholder message="No reviews yet." />
      )}
    </div>
  );
}

function InquiriesSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Incoming Inquiries
      </h2>
      {inquiries.length > 0 ? (
        <div className="space-y-6">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="border-b border-gray-100 pb-6 last:border-b-0"
            >
              <div className="flex items-start space-x-4">
                <Mail className="w-10 h-10 text-emerald-600" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {inquiry.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {inquiry.email}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {inquiry.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Placeholder message="No inquiries yet." />
      )}
    </div>
  );
}

export default function PartnerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        <EventsCreatedSection />
        <DiscountsCreatedSection />
        <ReviewsSection />
        <InquiriesSection />
      </div>
    </div>
  );
}
