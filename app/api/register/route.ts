import prismadb from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

type ResponseData = {
  message: string;
};

export const GET = () => {
  return NextResponse.json({ message: "Register" });
};

export const POST = async (request: Request) => {
  const { email, name, password } = await request.json();
  const user = await prismadb.user.findUnique({ where: { email } });
  if (user)
    return NextResponse.json({
      message: "Email is already in use",
      data: null,
      success: false,
    });
  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = await prismadb.user.create({
    data: {
      name,
      email,
      password: hashpassword,
    },
  });
  return NextResponse.json({
    message: "User create successfully",
    data: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      image: newUser.name,
    },
  });
};
