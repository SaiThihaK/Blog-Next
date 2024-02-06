import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import prismadb from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { NextResponse } from "next/server";

const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password should be minimum 8 characters"),
});

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismadb) as Adapter,
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = RegisterUserSchema.parse(credentials);
        const user = await prismadb.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!user) return null;
        if (user.password) {
          const isPasswordValid = await bcrypt.compare(
            password,
            user.password as string
          );
          if (!isPasswordValid) {
            throw new Error("Incorrect Password");
          }
        }
        return user;
      },
    }),
  ],
  // debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
        },
      };
    },
    jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
        };
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
