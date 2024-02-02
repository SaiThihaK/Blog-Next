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

export const DELETE = async (
  request: Request,
  { params }: { params: RequestParams }
) => {
  try {
    const id = params.id;
    const deleteBlog = await prismadb.blog.delete({
      where: {
        id,
      },
    });
    if (deleteBlog)
      return NextResponse.json({
        message: "blog delete Successfull",
        data: null,
        success: true,
      });
  } catch (error) {
    console.error("delete failed:", error);
    return NextResponse.json({
      message: "blog Delete Failed",
      data: null,
      success: false,
    });
  }
};

export const PUT = async (
  request: Request,
  { params }: { params: RequestParams }
) => {
  try {
    const { title, desc, image, email, categoryId, topPost } =
      await request.json();
    const id = params.id;
    const updateBlog = await prismadb.blog.update({
      where: {
        id,
      },
      data: {
        title,
        desc,
        image,
        userEmail: email,
        categoryId,
        topPost,
      },
    });
    if (updateBlog)
      return NextResponse.json({
        message: "blog update Successfull",
        data: updateBlog,
        success: true,
      });
  } catch (error) {
    console.error("update failed:", error);
    return NextResponse.json({
      message: "blog update Failed",
      data: null,
      success: false,
    });
  }
};
