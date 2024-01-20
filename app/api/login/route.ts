import prismadb from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();

    const user = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (!user)
      return NextResponse.json({
        message: "User not exist",
        data: null,
        success: false,
      });
    const matchPassword = await bcrypt.compare(
      password,
      user.password as string
    );
    if (!matchPassword)
      return NextResponse.json({
        message: "Wrong Password",
        data: null,
        success: false,
      });

    return NextResponse.json({
      message: "Login successfully",
      data: {
        id: user.id,
        name: user.name,
        image: user.image,
        email: user.email,
      },
      success: false,
    });
  } catch (error) {
    console.error(error);
  }
};
