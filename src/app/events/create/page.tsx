// FINAL, PRODUCTION-READY CODE FOR: src/app/events/create/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { EventForm } from "@/components/shared/EventForm";
import { getAllCategories } from "@/lib/actions/category.actions";

export default async function CreateEventPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const categories = await getAllCategories();

  if (!userId) {
    return (
      <section className="wrapper my-8 text-center">
        <h1 className="h2-bold">Access Denied</h1>
        <p className="mt-4">You must be logged in to create an event.</p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h1 className="wrapper h1-bold text-center sm:text-left">
          Create Event
        </h1>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" categories={categories} />
      </div>
    </>
  );
}
