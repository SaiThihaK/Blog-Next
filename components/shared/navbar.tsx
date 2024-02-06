'use client';
import { User } from '@/types/users';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HamburgerMenu from './hamburgerMenu';
import { useSession } from 'next-auth/react';
import AuthLinks from './authLinks';

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  const { data } = useSession();
  return (
    <nav className="flex justify-between items-center h-[100px]">
      <div className="gap-3 flex-1 hidden lg:flex">
        <Image src="/facebook.png" alt="facebook logo" width={24} height={24} />
        <Image
          src="/instagram.png"
          alt="instagram logo"
          width={24}
          height={24}
        />
        <Image src="/tiktok.png" alt="tiktok logo" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube logo" width={24} height={24} />
      </div>
      <div className="flex-1 text-left lg:text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        The Dev
      </div>
      <div className="gap-3 lg:gap-5 hidden sm:flex justify-end items-center flex-1 text-base lg:text-lg">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/">Contact</Link>
        <AuthLinks user={data?.user} />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
