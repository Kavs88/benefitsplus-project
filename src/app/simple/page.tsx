'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Star, 
  MapPin, 
  ArrowRight, 
  Play,
  Users,
  Award,
  Shield,
  Zap
} from 'lucide-react';

// Mock data for testing
const mockEvents = [
  {
    id: '1',
    title: 'Mindful Mountain Retreat',
    location: 'Aspen, Colorado',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    rating: 4.9,
    deal: 'Save 40%',
    price: '$299',
    originalPrice: '$499',
    tag: 'Most Popular'
  },
  {
    id: '2',
    title: 'Artisan Coffee Workshop',
    location: 'Portland, Oregon',
    category: 'Food & Drink',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    rating: 4.8,
    deal: 'Save 25%',
    price: '$89',
    originalPrice: '$119',
    tag: 'New'
  },
  {
    id: '3',
    title: 'Sunset Photography Adventure',
    location: 'Sedona, Arizona',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: 4.7,
    deal: 'Save 30%',
    price: '$149',
    originalPrice: '$199',
    tag: 'Limited Time'
  }
];

const categories = [
  { name: 'Wellness', icon: '🧘', color: 'from-emerald-400 to-teal-500', count: 156 },
  { name: 'Food & Drink', icon: '🍽️', color: 'from-orange-400 to-red-500', count: 89 },
  { name: 'Adventure', icon: '🏔️', color: 'from-blue-400 to-indigo-500', count: 67 },
  { name: 'Culture', icon: '🎨', color: 'from-purple-400 to-pink-500', count: 43 },
  { name: 'Learning', icon: '📚', color: 'from-yellow-400 to-orange-500', count: 78 },
  { name: 'Relaxation', icon: '🌿', color: 'from-green-400 to-emerald-500', count: 92 }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    text: 'BenefitPlus transformed our company culture. The wellness retreats have boosted team morale and productivity.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'I discovered amazing local experiences I never knew existed. The photography workshop was life-changing!',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    text: 'The quality of experiences is outstanding. Every benefit feels carefully curated and genuinely valuable.',
    rating: 5
  }
];

// Simple Header Component
function SimpleHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              BenefitPlus
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                Discover
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                For Teams
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join 50,000+ people discovering amazing benefits</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Discover
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Amazing</span>
            <br />
            Experiences
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Unlock exclusive wellness retreats, culinary adventures, and cultural experiences. 
            Curated for modern professionals who value quality and authenticity.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Exploring
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-200 hover:bg-gray-50">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Categories Section Component
function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What's Inside
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore curated categories designed to enrich your life and expand your horizons
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} experiences</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Benefit Card Component
function EnhancedBenefitCard({ event, index }: { event: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <span className="text-xs font-semibold text-gray-900">{event.tag}</span>
          </div>
        </div>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm group-hover:scale-110">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                {event.category}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold text-gray-900">{event.rating}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 line-through">{event.originalPrice}</p>
                <p className="text-lg font-bold text-gray-900">{event.price}</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-lg">
                <span className="text-white font-bold text-sm">{event.deal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{event.location}</span>
        </div>

        <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

// Featured Benefits Section
function FeaturedBenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences that our community loves
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event, index) => (
            <EnhancedBenefitCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Experiences
          </button>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our community says about their experiences
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Partners',
      description: 'All experiences are vetted and verified for quality and safety'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Curated experiences that meet our high standards'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of professionals discovering amazing benefits'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Book and redeem experiences instantly with our platform'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose BenefitPlus?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional experiences that enrich your life
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
              BenefitPlus
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover amazing experiences that enrich your life and expand your horizons. 
              Curated for modern professionals who value quality and authenticity.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BenefitPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      <HeroSection />
      <CategoriesSection />
      <FeaturedBenefitsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
} 