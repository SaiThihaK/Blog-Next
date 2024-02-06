'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/types/users';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthLinks = () => {
  const { status } = useSession();
  return (
    <>
      {status === 'authenticated' && (
        <>
          <Link href="/admin">Dashboard</Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
