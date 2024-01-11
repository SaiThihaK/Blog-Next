import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthLinks from './authLinks';
import HamburgerMenu from './hamburgerMenu';

const Navbar = () => {
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
      <div className="flex-1 text-left lg:text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        nextblog
      </div>
      <div className="gap-3 lg:gap-5 hidden sm:flex justify-end items-center flex-1 text-base lg:text-lg">
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
