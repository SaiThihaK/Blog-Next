'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const status = 'notauthenticated';
  return (
    <>
      <div className="cursor-pointer sm:hidden">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      {open && (
        <div className="absolute left-0 top-[100px] w-full justify-center bg-white z-20 h-[calc(100vh_-_100px)] flex flex-col items-center gap-10 text-lg">
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
