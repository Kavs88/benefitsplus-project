import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string })?.role;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-white dark:bg-zinc-900 border-b md:border-b-0 md:border-r border-border p-4 flex md:flex-col gap-2 md:gap-0 items-center md:items-stretch justify-between md:justify-start">
        <div className="flex flex-row md:flex-col gap-2 w-full">
          <Link
            href="/dashboard/member"
            className="block px-4 py-2 rounded hover:bg-muted w-full text-center md:text-left"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/account"
            className="block px-4 py-2 rounded hover:bg-muted w-full text-center md:text-left"
          >
            Account
          </Link>
          {role === "member" && (
            <Link
              href="/dashboard/member/saved"
              className="block px-4 py-2 rounded hover:bg-muted w-full text-center md:text-left"
            >
              Saved
            </Link>
          )}
          {role === "partner" && (
            <Link
              href="/dashboard/partner/offers"
              className="block px-4 py-2 rounded hover:bg-muted w-full text-center md:text-left"
            >
              Offers
            </Link>
          )}
        </div>
        <button
          onClick={() => signOut()}
          className="mt-2 md:mt-auto w-full bg-primary text-white py-2 rounded"
        >
          Sign out
        </button>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
