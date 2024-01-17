import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allBlogs = await prismadb.blog.findMany();
    return NextResponse.json({
      message: "Fetch all blogs successfully",
      data: allBlogs,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({
      message: "Internal server error",
      data: null,
      success: false,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const { title, desc, image, category, email } = await request.json();
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
      message: "Blog created successfully",
      data: null,
      success: true,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({
      message: "Internal server error",
      data: null,
      success: false,
    });
  }
};
