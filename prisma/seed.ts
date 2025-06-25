import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create sample users
  const hashedPassword = await hash('password123', 12);

  const partner1 = await prisma.user.upsert({
    where: { email: 'zen@wellness.com' },
    update: {},
    create: {
      email: 'zen@wellness.com',
      name: 'Zen Wellness Center',
      password: hashedPassword,
      role: 'partner',
      location: 'Aspen, CO',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop&crop=face',
    },
  });

  const partner2 = await prisma.user.upsert({
    where: { email: 'taste@italy.com' },
    update: {},
    create: {
      email: 'taste@italy.com',
      name: 'Taste of Italy',
      password: hashedPassword,
      role: 'partner',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=face',
    },
  });

  const partner3 = await prisma.user.upsert({
    where: { email: 'wild@lens.com' },
    update: {},
    create: {
      email: 'wild@lens.com',
      name: 'Wild Lens Adventures',
      password: hashedPassword,
      role: 'partner',
      location: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=face',
    },
  });

  const member1 = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      email: 'john@example.com',
      name: 'John Smith',
      password: hashedPassword,
      role: 'member',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  });

  const member2 = await prisma.user.upsert({
    where: { email: 'sarah@example.com' },
    update: {},
    create: {
      email: 'sarah@example.com',
      name: 'Sarah Johnson',
      password: hashedPassword,
      role: 'member',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
  });

  console.log('✅ Users created');

  // Create sample events
  const event1 = await prisma.event.upsert({
    where: { id: 'event-1' },
    update: {},
    create: {
      id: 'event-1',
      title: 'Yoga Retreat Weekend',
      description: 'Escape to a peaceful mountain retreat for a weekend of yoga, meditation, and wellness. Experience the perfect blend of relaxation and rejuvenation in the heart of the Rockies.',
      date: new Date('2024-03-15T09:00:00Z'),
      location: 'Mountain View Resort',
      city: 'Aspen, CO',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      partnerId: partner1.id,
    },
  });

  const event2 = await prisma.event.upsert({
    where: { id: 'event-2' },
    update: {},
    create: {
      id: 'event-2',
      title: 'Gourmet Cooking Class',
      description: 'Learn to cook authentic Italian cuisine with a master chef in an intimate setting. From pasta making to wine pairing, discover the secrets of Italian gastronomy.',
      date: new Date('2024-03-20T18:00:00Z'),
      location: 'Culinary Institute',
      city: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      partnerId: partner2.id,
    },
  });

  const event3 = await prisma.event.upsert({
    where: { id: 'event-3' },
    update: {},
    create: {
      id: 'event-3',
      title: 'Adventure Photography Workshop',
      description: 'Capture stunning landscapes while hiking through scenic trails with professional guidance. Perfect for both beginners and advanced photographers.',
      date: new Date('2024-03-25T07:00:00Z'),
      location: 'National Park',
      city: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      partnerId: partner3.id,
    },
  });

  const event4 = await prisma.event.upsert({
    where: { id: 'event-4' },
    update: {},
    create: {
      id: 'event-4',
      title: 'Mindfulness Meditation Session',
      description: 'Join us for a transformative meditation session led by certified mindfulness instructors. Learn techniques for stress reduction and mental clarity.',
      date: new Date('2024-03-30T10:00:00Z'),
      location: 'Zen Garden Center',
      city: 'Aspen, CO',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      partnerId: partner1.id,
    },
  });

  console.log('✅ Events created');

  // Create sample reviews
  await prisma.review.upsert({
    where: { id: 'review-1' },
    update: {},
    create: {
      id: 'review-1',
      rating: 5,
      comment: 'Amazing experience! The yoga retreat was exactly what I needed. The instructors were knowledgeable and the location was breathtaking.',
      eventId: event1.id,
      authorId: member1.id,
    },
  });

  await prisma.review.upsert({
    where: { id: 'review-2' },
    update: {},
    create: {
      id: 'review-2',
      rating: 4,
      comment: 'Great cooking class! I learned so much about Italian cuisine. The chef was patient and the food was delicious.',
      eventId: event2.id,
      authorId: member2.id,
    },
  });

  await prisma.review.upsert({
    where: { id: 'review-3' },
    update: {},
    create: {
      id: 'review-3',
      rating: 5,
      comment: 'Incredible photography workshop! The instructor helped me improve my skills significantly. The locations were stunning.',
      eventId: event3.id,
      authorId: member1.id,
    },
  });

  await prisma.review.upsert({
    where: { id: 'review-4' },
    update: {},
    create: {
      id: 'review-4',
      rating: 4,
      comment: 'Very relaxing meditation session. The instructor was calming and the techniques were easy to follow.',
      eventId: event4.id,
      authorId: member2.id,
    },
  });

  console.log('✅ Reviews created');
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 