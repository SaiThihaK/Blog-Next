import prismadb from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const image = formData.get("image") as string;
  const userEmail = formData.get("userEmail") as string;
  const category = formData.get("category") as string;

  await prismadb.blog.create({
    data: {
      title: title,
      desc: desc,
      image: image,
      userEmail: userEmail,
      category: category,
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
