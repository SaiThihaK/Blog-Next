import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  id: string;
  title: string;
  coverImage: string;
  date: string;
  category: string;
  desc: string;
}

const PostCard: React.FC<Props> = ({
  id,
  title,
  coverImage,
  date,
  category,
  desc,
}) => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="flex-1 h-[350px] relative hidden lg:block">
        <Image src="/p1.jpeg" alt="img" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-[20px]">
        <div className="flex gap-2">
          <span className="text-slate-600">{formatDate(date)}</span>
          <span>-</span>
          <span className="text-red-700 font-medium">CULTURE</span>
        </div>
        <Link href={`/blogs/${id}`}>
          <h1>{title}</h1>
        </Link>
        <div
          className="text-sm md:text-base font-normal text-textSoftColor"
          dangerouslySetInnerHTML={{ __html: `${desc.substring(0, 240)}...` }}
        />
        <Link href="/" className="border-b-[1px] border-b-red-700 py-1 w-max">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
