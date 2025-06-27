import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role?: string | null;
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object returned in the JWT and database.
   */
  interface User extends DefaultUser {
    /** The user's role. */
    role?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
