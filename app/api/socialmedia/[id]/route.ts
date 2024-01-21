import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

type RequestParams = {
  id: string;
};

export const DELETE = async (
  request: Request,
  { params }: { params: RequestParams }
) => {
  try {
    const id = params.id;
    const socialLink = await prismadb.socialMedia.delete({
      where: {
        id,
      },
    });
    if (socialLink)
      return NextResponse.json({
        message: "social Media Delete Successfull",
        data: null,
        success: true,
      });
  } catch (error) {
    console.error("delete failed:", error);
    return NextResponse.json({
      message: "Social Media Delete Failed",
      data: null,
      success: false,
    });
  }
};
