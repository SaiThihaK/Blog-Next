import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const page: NextPage = () => {
  return (
    <>
      <Link href={"/api/auth/signout"}>
        <Button>Logout</Button>
      </Link>
    </>
  );
};

export default page;
