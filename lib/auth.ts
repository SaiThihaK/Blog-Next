import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import prismadb from "@/lib/db";

import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismadb) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // debug: process.env.NODE_ENV === "development",
  // secret: process.env.NEXTAUTH_SECRET,
};
