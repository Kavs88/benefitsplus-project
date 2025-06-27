// FINAL CODE FOR: src/app/discounts/create/page.tsx

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth'; // CORRECT imports for server-side session
import { redirect } from 'next/navigation';
import DiscountForm from '@/components/shared/DiscountForm'; // FIX: This is a default import
import { prisma } from '@/lib/db';

export default async function CreateDiscountPage() {
  // CORRECTLY get the session on the server
  const session = await getServerSession(authOptions);

  // Protect the route - if no session, redirect to sign-in
  if (!session?.user || !('id' in session.user)) {
    redirect('/api/auth/signin');
  }

  // Fetch categories to pass to the form
  const categories = await prisma.category.findMany();

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h1 className="wrapper h1-bold text-center sm:text-left">Create Discount</h1>
      </section>
      <div className="wrapper my-8">
        <DiscountForm
          userId={session.user['id']}
          type="Create"
          categories={categories}
        />
      </div>
    </>
  );
}