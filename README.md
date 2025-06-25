# BenefitPlus 🚀

A full-stack web application for discovering and managing premium benefits and experiences. Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## ✨ Features

### 🔐 Authentication & Authorization
- **NextAuth.js** integration with Google OAuth and email/password
- **Role-based access control** (Member, Partner, Admin)
- **Protected routes** with middleware
- **Session management** with automatic role-based redirects

### 🎯 User Roles

#### **Members** 👥
- Discover and browse events/benefits
- Submit reviews and ratings
- View event details and partner information
- Personalized dashboard with favorites

#### **Partners** 🏢
- Create and manage events
- View analytics and performance metrics
- Respond to reviews and feedback
- Event management dashboard

### 🏗️ Technical Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Supabase)
- **Authentication**: NextAuth.js
- **State Management**: React Query (TanStack Query)
- **UI Components**: Custom components with Framer Motion
- **Styling**: Tailwind CSS with custom design system

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Supabase recommended)
- Google OAuth credentials (optional)

### 1. Clone and Install

```bash
git clone <repository-url>
cd benefit-plus
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Database Setup

```bash
# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed
```

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
benefit-plus/
├── components/           # Reusable UI components
├── screens/             # Page-level components
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes
│   │   ├── dashboard/  # Role-based dashboards
│   │   └── globals.css # Global styles
│   ├── components/     # UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript type definitions
├── prisma/             # Database schema and migrations
└── public/             # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`#3B82F6` to `#8B5CF6`)
- **Secondary**: Purple accents
- **Background**: Light gray (`#F7F7FA`)
- **Text**: Dark gray (`#1D1D1F`)

### Typography
- **Font**: Geist Sans (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Modals**: Framer Motion animations
- **Forms**: Clean, accessible design

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth endpoints

### Events
- `GET /api/events` - Fetch all events
- `POST /api/events` - Create new event (Partners only)
- `GET /api/events/[id]` - Get specific event
- `PUT /api/events/[id]` - Update event
- `DELETE /api/events/[id]` - Delete event

### Reviews
- `GET /api/reviews?eventId=...` - Get reviews for event
- `POST /api/reviews` - Submit review

## 👥 Sample Users

After running the seed script, you can test with these accounts:

### Partners
- **Email**: `zen@wellness.com` | **Password**: `password123`
- **Email**: `taste@italy.com` | **Password**: `password123`
- **Email**: `wild@lens.com` | **Password**: `password123`

### Members
- **Email**: `john@example.com` | **Password**: `password123`
- **Email**: `sarah@example.com` | **Password**: `password123`

## 🛠️ Development

### Adding New Features

1. **API Routes**: Add new endpoints in `src/app/api/`
2. **Components**: Create reusable components in `src/components/`
3. **Pages**: Add new pages in `src/app/` or `src/dashboard/`
4. **Database**: Update schema in `prisma/schema.prisma`

### Database Changes

```bash
# After modifying schema.prisma
npm run db:push

# For production migrations
npx prisma migrate dev --name migration-name
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established color palette
- Maintain consistent spacing and typography
- Use Framer Motion for animations

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
