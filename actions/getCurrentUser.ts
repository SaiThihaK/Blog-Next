import { authOptions } from "@/lib/auth";
import prismadb from "@/lib/db";
import { getServerSession } from "next-auth";
import Email from "next-auth/providers/email";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

export const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) return null;

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) return null;
    return currentUser;
  } catch (error) {
    return null;
  }
};
