import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoriesList = () => {
  return (
    <div>
      <h1 className="mb-[25px] lg:mb-[35px] xl:mb-[50px] mt-[50px]">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="flex items-center justify-center rounded-sm gap-[10px] capitalize bg-[#57c4ff31] h-[80px] w-full sm:w-[45%] md:w-[25%]  xl:w-[15%]">
          <Image
            src="/style.png"
            alt="style category"
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
          style
        </div>
        <div className="flex items-center gap-[10px] capitalize h-[80px] bg-[#da85c731] justify-center rounded-sm w-full sm:w-[45%] md:w-[25%] xl:w-[15%]">
          <Image
            src="/food.png"
            alt="food category"
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
          food
        </div>
        <div className="flex items-center gap-[10px] capitalize h-[80px] bg-[#7fb88133] justify-center rounded-sm w-full sm:w-[45%] md:w-[25%]  xl:w-[15%]">
          <Image
            src="/fashion.png"
            alt="fashion category"
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
          fashion
        </div>
        <div className="flex items-center gap-[10px] capitalize h-[80px] bg-[#ff795736] justify-center rounded-sm w-full sm:w-[45%] md:w-[25%]  xl:w-[15%]">
          <Image
            src="/culture.png"
            alt="culture category"
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
          culture
        </div>
        <div className="flex items-center gap-[10px] capitalize h-[80px] bg-[#ffb04f45] justify-center rounded-sm w-full sm:w-[45%] md:w-[25%]  xl:w-[15%]">
          <Image
            src="/coding.png"
            alt="coding category"
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
          coding
        </div>
        <div className="flex items-center gap-[10px] capitalize h-[80px] bg-[#5e4fff31] justify-center rounded-sm w-full sm:w-[45%] md:w-[25%]  xl:w-[15%]">
          <Image
            src="/travel.png"
            alt="travel category"
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
          travel
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
