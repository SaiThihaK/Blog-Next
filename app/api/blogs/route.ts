import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const url = new URL(request.url);
    const page = +(url.searchParams.get("page") ?? "1");
    const limit = +(url.searchParams.get("limit") ?? "3");
    const category = url.searchParams.get("category");
    const search = url.searchParams.get("search");
    const skip = (page - 1) * limit;
    let where: any = {};

    // Category filter
    if (category) {
      where.category = {
        category: category,
      };
    }

    // Search filter
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { desc: { contains: search, mode: "insensitive" } },
      ];
    }

    const [total, allBlogs] = await prismadb.$transaction([
      prismadb.blog.count({ where }),
      prismadb.blog.findMany({
        take: limit,
        skip,
        include: { category: true },
        where,
      }),
    ]);

    return NextResponse.json({
      message: "Fetch all blogs successfully",
      total,
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
    const { title, desc, image, email, categoryId } = await request.json();
    await prismadb.blog.create({
      data: {
        title,
        desc,
        image,
        categoryId,

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
