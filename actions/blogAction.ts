import prismadb from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createBlog = async (
  title: string,
  desc: any,
  image: string,
  category: string
) => {
  await prismadb.blog.create({
    data: {
      title: "title",
      desc: "hello",
      image: "/image",
      userEmail: "user email",
      category: "technology",
    },
  });

  revalidatePath("/create");
};

export const deleteBlog = async (formData: FormData) => {
  const id = formData.get("postId") as string;

  await prismadb.blog.delete({
    where: { id: id },
  });

  revalidatePath("/userposts");
};
