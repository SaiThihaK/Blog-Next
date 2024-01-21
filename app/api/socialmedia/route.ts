import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allSocialLink = await prismadb.socialMedia.findMany();
    if (allSocialLink) {
      return NextResponse.json({
        message: "Fetch Succesfull All SocialMedia",
        data: allSocialLink,
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Fail fetching social media links",
      data: null,
      success: false,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const { socialLink, type } = await request.json();
    const existLink = await prismadb.socialMedia.findFirst({
      where: {
        type,
      },
    });
    if (existLink) {
      return NextResponse.json({
        message: "This social media platform is already linked",
        data: null,
        success: false,
      });
    }
    const newSocialMedia = await prismadb.socialMedia.create({
      data: {
        socialLink,
        type,
      },
    });
    if (newSocialMedia)
      return NextResponse.json({
        message: `${type} link is successfully created`,
        data: newSocialMedia,
        success: true,
      });
  } catch (error) {}
  return NextResponse.json({
    message: "500 Internal Server",
    data: null,
    success: false,
  });
};
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
