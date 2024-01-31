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
    <div className="flex items-center gap-[50px]">
      <div className="flex-1 h-[350px] relative hidden lg:block">
        <Image src={coverImage} alt="img" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-[18px] lg:gap-[20px]">
        <div className="flex gap-2">
          <span className="text-slate-600">{formatDate(date)}</span>
          <span>-</span>
          <span className="text-red-700 font-medium uppercase">{category}</span>
        </div>
        <div className="w-full h-[300px] relative lg:hidden">
          <Image src={coverImage} alt="img" fill className="object-cover" />
        </div>
        <h1>{title}</h1>
        <div
          className="text-sm md:text-base font-normal text-textSoftColor"
          dangerouslySetInnerHTML={{ __html: `${desc.substring(0, 240)}...` }}
        />
        <Link
          href={`/blogs/${id}`}
          className="text-slate-600 overflow-hidden group hover:text-slate-900 transition-all py-1 w-max relative"
        >
          Read More
          <div className="absolute bottom-0 h-[0.5px] transition-all left-0 -translate-x-full group-hover:translate-x-0 inset-x-0 bg-slate-950 -mt-1"></div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
