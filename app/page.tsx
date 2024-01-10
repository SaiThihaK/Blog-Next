import { getCurrentUser } from "@/actions/getCurrentUser";
import Home from "@/page-container/home";
import { NextPage } from "next";
import React from "react";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <Home />;
};

export default page;
