import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allCategory = await prismadb.category.findMany({
      include: {
        blog: true,
      },
    });
    return NextResponse.json({
      message: "Fetch all category successfully",
      data: allCategory,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json({
      message: "Internal server error",
      data: null,
      success: false,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const { category } = await request.json();
    const existedCategory = await prismadb.category.findUnique({
      where: { category },
    });
    if (existedCategory) {
      return NextResponse.json({
        message: "Category already exist",
        data: null,
        success: false,
      });
    }
    await prismadb.category.create({
      data: {
        category,
      },
    });

    return NextResponse.json({
      message: "category created successfully",
      data: null,
      success: true,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({
      message: "Internal server error",
      data: error,
      success: false,
    });
  }
};
