import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-[50px] flex flex-col gap-[30px] md:gap-[60px] md:flex-row lg:justify-between py-8">
      <div className="flex flex-col gap-[15px] flex-1">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="footer logo" width={36} height={36} />
          <h1>nextdev</h1>
        </div>
        <p className="text-textSoftColor text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          ducimus soluta, nihil quam nemo autem perspiciatis? Eveniet quibusdam
          maxime, tempore incidunt
        </p>
      </div>
      <div className="flex-1 flex gap-[60px] md:gap-[100px] justify-between md:justify-end w-full">
        <div className="flex flex-col gap-[12px] text-sm md:text-base">
          <h4 className="font-semibold text-base md:text-lg">Links</h4>
          <Link href="/" className=" text-textSoftColor">
            Home
          </Link>
          <Link href="/" className=" text-textSoftColor">
            About
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Blog
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-[12px] text-sm md:text-base">
          <h4 className="font-semibold text-base md:text-lg">Tags</h4>
          <Link href="/" className=" text-textSoftColor">
            Style
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Coding
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Culture
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Travel
          </Link>
        </div>
        <div className="flex flex-col gap-[12px] text-sm md:text-base">
          <h4 className="font-semibold text-base md:text-lg">Socials</h4>
          <Link href="/" className=" text-textSoftColor">
            Facebook
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Instagram
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Tiktok
          </Link>
          <Link href="/" className=" text-textSoftColor">
            Youtube
          </Link>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
