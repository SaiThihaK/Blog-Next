"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/users";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

type AuthLinksProps = {
  user: User;
};

const AuthLinks: React.FC<AuthLinksProps> = ({ user }) => {
  const { status } = useSession();

  console.log(user);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <Avatar>
            <AvatarImage src={user?.image as string} />
            <AvatarFallback>{user?.name[0] as string}</AvatarFallback>
          </Avatar>
        </>
      )}
    </>
  );
};

export default AuthLinks;
