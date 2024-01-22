'use client';
import { CategoryListsSkeleton } from '@/components/shared/skeletons';
import { useGetCategory } from '@/services/category';
import { GetAllCateogriesResponse } from '@/types/category';
import Image from 'next/image';
import React from 'react';

const CategoriesList = () => {
  const { data, isLoading, error } = useGetCategory<GetAllCateogriesResponse>();
  return (
    <div>
      <h1 className="mb-[25px] lg:mb-[35px] xl:mb-[50px] mt-[50px]">
        Popular Categories
      </h1>
      {isLoading ? (
        <CategoryListsSkeleton />
      ) : (
        <div className="flex flex-wrap justify-between gap-[20px]">
          {data?.data.map((data) => {
            return (
              <div
                key={data.id}
                className="flex items-center justify-center rounded-sm gap-[10px] capitalize bg-slate-200 h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"
              >
                <Image
                  src="/style.png"
                  alt="style category"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full"
                />
                {data.category}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoriesList;
