"use client";

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { signOut } from "next-auth/react";
import React from "react";

const page: NextPage = () => {
  return (
    <>
      <Button onClick={() => signOut()}>Logout</Button>
    </>
  );
};

export default page;
