import Link from 'next/link';
import React from 'react';

const MenuCategories = () => {
  return (
    <div className="mt-[30px] mb-[50px] flex flex-wrap gap-[20px]">
      <Link
        href="/blog"
        className="py-[10px] px-[15px] rounded-md text-sm bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        href="/blog"
        className="py-[10px] px-[15px] rounded-md text-sm bg-[#7fb88133]"
      >
        Fashion
      </Link>
      <Link
        href="/blog"
        className="py-[10px] px-[15px] rounded-md text-sm bg-[#da85c731]"
      >
        Food
      </Link>
      <Link
        href="/blog"
        className="py-[10px] px-[15px] rounded-md text-sm bg-[#5e4fff31]"
      >
        Travel
      </Link>
      <Link
        href="/blog"
        className="py-[10px] px-[15px] rounded-md text-sm bg-[#ff795736]"
      >
        Culture
      </Link>
      <Link
        href="/blog"
        className="py-[10px] px-[15px] rounded-md text-sm bg-[#ffb04f45]"
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
