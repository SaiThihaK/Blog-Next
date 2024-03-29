'use client';
import { CategoryListsSkeleton } from '@/components/shared/skeletons';
import { useGetCategory } from '@/services/category';
import { GetAllCateogriesResponse } from '@/types/category';
import { useRouter } from 'next/navigation';
import React from 'react';

const CategoriesList = () => {
  const { data, isLoading } = useGetCategory<GetAllCateogriesResponse>();
  const router = useRouter();
  return (
    <div>
      <h1 className="mb-[25px] lg:mb-[35px] xl:mb-[50px] mt-[50px]">
        Popular Categories
      </h1>
      {isLoading ? (
        <CategoryListsSkeleton />
      ) : (
        <div className="flex flex-wrap justify-between gap-[20px]">
          {data?.data &&
            data?.data.map((data) => {
              return (
                <div
                  key={data.id}
                  role="button"
                  className="flex items-center justify-center rounded-sm gap-[10px] uppercase font-medium bg-slate-200 h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%] cursor-pointer hover:shadow-md transition-all"
                  onClick={() =>
                    router.push(
                      `/blogs?category=${data.category.toLocaleLowerCase()}`
                    )
                  }
                >
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
