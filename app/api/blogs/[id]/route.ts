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
    const blog = await prismadb.blog.findFirst({
      where: {
        id,
      },
    });

    if (blog) {
      return NextResponse.json({
        message: "Blog found",
        data: blog,
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Blog not found",
        data: null,
        success: false,
      });
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({
      message: "Internal server error",
      data: null,
      success: false,
    });
  }
};
