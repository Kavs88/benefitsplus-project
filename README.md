# BenefitPlus Project

This is a modern full-stack application designed to connect members with local discounts, events, and partner offers. The platform serves two main user groups: members seeking benefits and partners managing events and discounts.

## Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS with ShadCN UI
- **ORM:** Prisma
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** NextAuth.js
- **Form Handling:** React Hook Form & Zod
- **Image Uploads:** UploadThing

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Kavs88/benefitsplus-project.git
    cd benefitsplus-project
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Set up your environment variables:**
    -   Create a new file named `.env` in the root of the project.
    -   Copy the contents of `.env.example` into your new `.env` file.
    -   Fill in the necessary values (like `DATABASE_URL` and `NEXTAUTH_SECRET`).
4.  **Run database migrations:**
    ```sh
    npx prisma migrate dev
    ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
