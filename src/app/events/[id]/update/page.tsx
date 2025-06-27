import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getEventById } from "@/lib/actions/event.actions";
import { EventForm } from "@/components/shared/EventForm";
import { DetailedEvent } from "@/types";
import { getAllCategories } from "@/lib/actions/category.actions";

type UpdateEventPageProps = {
  params: {
    id: string;
  };
};

export default async function UpdateEventPage({
  params,
}: UpdateEventPageProps) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const categories = await getAllCategories();

  if (!userId) {
    return (
      <div className="text-center">You must be logged in to edit an event.</div>
    );
  }

  const event: DetailedEvent = await getEventById(params.id);

  if (event.partnerId !== userId) {
    return (
      <div className="text-center">
        Access Denied: You are not the organizer of this event.
      </div>
    );
  }

  // Transform DetailedEvent to match EventForm expected format
  const eventForForm = {
    id: event.id,
    title: event.title,
    description: event.description || "",
    location: event.location,
    imageUrl: event.imageUrl,
    startDateTime: event.startDateTime.toISOString(),
    endDateTime: event.endDateTime.toISOString(),
    price: event.price,
    isFree: event.isFree,
    category: event.categories.length > 0 ? event.categories[0].id : "",
  };

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h1 className="wrapper h1-bold text-center sm:text-left">
          Update Event
        </h1>
      </section>
      <div className="wrapper my-8">
        <EventForm
          userId={userId}
          event={eventForForm}
          type="Update"
          categories={categories}
        />
      </div>
    </>
  );
}
