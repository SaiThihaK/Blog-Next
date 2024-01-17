import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    message: "Fetch all of the blog",
    data: "blogs",
    success: true,
  });
};

export const POST = async (reqest: Request) => {
  const { title, desc, image, category, email } = await reqest.json();
  await prismadb.blog.create({
    data: {
      title,
      desc,
      image,
      category,
      userEmail: email,
    },
  });

  return NextResponse.json({
    message: "Blog create successfully",
    data: null,
    success: true,
  });
};
