'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import HamburgerMenu from './hamburgerMenu';
import { useSession } from 'next-auth/react';
import AuthLinks from './authLinks';
import SearchBrowse from './searchBrowse';
import { useGetSocialLinks } from '@/services/socialLinks';
import { GetAllSocialLinksResponse } from '@/types/socialLink';
import { SocialLinksSkelton } from './skeletons';
type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  const { data } = useSession();
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const { data: socialLinks, isLoading } =
    useGetSocialLinks<GetAllSocialLinksResponse>();

  return (
    <nav className="flex justify-between items-center h-[100px]">
      <div className="gap-3 flex-1 hidden lg:flex">
        {isLoading ? (
          <SocialLinksSkelton />
        ) : (
          socialLinks?.data &&
          socialLinks.data.map((link) => {
            return (
              <a key={link.id} target="_blank" href={link.socialLink}>
                <Image
                  src={`/${link.type}.png`}
                  alt={`${link.type}`}
                  width={24}
                  height={24}
                />
              </a>
            );
          })
        )}
      </div>
      <div className="flex-1 text-left lg:text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        The Dev
      </div>
      <div className="gap-3 lg:gap-5 relative hidden sm:flex justify-end items-center flex-1 text-base lg:text-lg">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/">Contact</Link>
        <div
          className="cursor-pointer"
          onClick={() => setOpenSearch((prev) => !prev)}
        >
          Search
        </div>
        {openSearch && (
          <div className="absolute top-8 w-full z-[9] bg-white">
            <SearchBrowse setOpenSearch={setOpenSearch} />
          </div>
        )}
        <AuthLinks />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
