import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

type RequestParams = {
  id: string;
};

export const GET = async (
  request: Request,
  { params }: { params: RequestParams }
) => {
  const id = params.id;

  try {
    const category = await prismadb.category.findFirst({
      where: {
        id,
      },
    });

    if (category) {
      return NextResponse.json({
        message: "Category found",
        data: category,
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Category not found",
        data: null,
        success: false,
      });
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json({
      message: "Internal server error",
      data: null,
      success: false,
    });
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: RequestParams }
) => {
  try {
    const id = params.id;
    const category = await prismadb.category.delete({
      where: {
        id,
      },
    });
    if (category)
      return NextResponse.json({
        message: "Category Delete Successfull",
        data: null,
        success: true,
      });
  } catch (error) {
    console.error("delete failed:", error);
    return NextResponse.json({
      message: "Category Delete Failed",
      data: null,
      success: false,
    });
  }
};
