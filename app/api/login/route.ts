import prismadb from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

import { z } from "zod";

const RegisterUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().min(8, "password should be minimum 8 characters"),
});

const RegisterUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = RegisterUserSchema.parse(req.body);
  const user = await prismadb.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    return res.send({ user: null, message: "User already exist" });
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = await prismadb.user.create({
    data: {
      name: name,
      email: email,
      password: hashpassword,
    },
  });
  return res.send({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    message: "User created successfully",
  });
};

export default RegisterUser;
