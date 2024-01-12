import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  withImages?: boolean;
}
const MenuPosts: React.FC<Props> = ({ withImages = true }) => {
  return (
    <div className="flex flex-col gap-[35px] mt-[30px] mb-[50px]">
      <Link href="/" className="flex items-center gap-[20px]">
        {withImages && (
          <div className="relative flex-1 aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full border-[2px] border-slate-500"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-[5px]">
          <span className="text-white px-[8px] py-[3px] rounded-lg text-xs bg-purple-600 w-max">
            Travel
          </span>
          <h3 className="text-textSoftColor text-base font-medium">
            Lorem ipsum consectetur dolor consectetur sit amet consectetur.
          </h3>
          <div className="text-xs">
            <span>John Doe</span>
            <span className="text-slate-700"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-[20px]">
        {withImages && (
          <div className="relative flex-1 aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full border-[2px] border-slate-500"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-[5px]">
          <span className="text-white px-[8px] py-[3px] rounded-lg text-xs bg-green-600 w-max">
            Fashion
          </span>
          <h3 className="text-textSoftColor text-base font-medium">
            Lorem ipsum consectetur dolor consectetur sit amet consectetur.
          </h3>
          <div className="text-xs">
            <span>John Doe</span>
            <span className="text-slate-700"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-[20px]">
        {withImages && (
          <div className="relative flex-1 aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full border-[2px] border-slate-500"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-[5px]">
          <span className="text-white px-[8px] py-[3px] rounded-lg text-xs bg-yellow-500 w-max">
            Coding
          </span>
          <h3 className="text-textSoftColor text-base font-medium">
            Lorem ipsum consectetur dolor consectetur sit amet consectetur.
          </h3>
          <div className="text-xs">
            <span>John Doe</span>
            <span className="text-slate-700"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
