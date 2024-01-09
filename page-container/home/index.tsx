import { getCurrentUser } from "@/actions/getCurrentUser";
import React from "react";

const Home = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return <div>index</div>;
};

export default Home;
