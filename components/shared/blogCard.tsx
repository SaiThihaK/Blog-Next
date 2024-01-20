import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = () => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="flex-1 h-[350px] relative hidden lg:block">
        <Image src="/p1.jpeg" alt="img" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-[20px]">
        <div className="flex gap-2">
          <span className="text-slate-600">11.02.2024</span>
          <span>-</span>
          <span className="text-red-700 font-medium">CULTURE</span>
        </div>
        <Link href="/blogs/tesst">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        </Link>
        <p className="text-sm md:text-base font-normal text-textSoftColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          voluptate, ipsa possimus tempore doloremque reiciendis ducimus nisi!
          Natus animi non, repellendus quidem quae quibusdam commodi cum hic
          nobis impedit enim?...
        </p>
        <Link href="/" className="border-b-[1px] border-b-red-700 py-1 w-max">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
