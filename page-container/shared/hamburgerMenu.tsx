'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const status = 'notauthenticated';
  return (
    <>
      <div
        className="flex cursor-pointer sm:hidden flex-col justify-between w-[20px] h-[18px]"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-[2px] bg-textColor"></div>
        <div className="w-full h-[2px] bg-textColor"></div>
        <div className="w-full h-[2px] bg-textColor"></div>
      </div>
      {open && (
        <div className="absolute left-0 top-[100px] w-full justify-center bg-white z-10 h-[calc(100vh_-_100px)] flex flex-col items-center gap-10 text-lg">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === 'notauthenticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
