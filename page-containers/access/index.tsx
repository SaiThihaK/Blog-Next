"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GoogleLoginButton } from "react-social-login-buttons";
import React, { useEffect, useState } from "react";

const Access = () => {
  const session = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") router.push("/");
  }, [session.status, router]);

  const socialAction = (action: string) => {
    setLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) return;
        if (callback?.ok) return router.push("/");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="mx-auto">
        <GoogleLoginButton onClick={() => socialAction("google")} />
      </div>
    </div>
  );
};

export default Access;
