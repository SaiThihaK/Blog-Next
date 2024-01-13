import { getCurrentUser } from "@/actions/userAction";
import Home from "@/page-containers/home";
import { NextPage } from "next";
import React from "react";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <Home />;
};

export default Page;
