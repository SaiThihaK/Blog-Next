'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import BlogsList from './blogsList';
import Menu from '../home/menu';

const Blogs = () => {
  const searchParams = useSearchParams();
  const blogCategory = searchParams.get('category');
  return (
    <div className="mt-[30px]">
      <div className="w-full bg-orange-500 p-4">
        <h4 className="text-white text-xl lg:text-2xl capitalize font-bold text-center">
          {blogCategory ?? 'all'} blogs
        </h4>
      </div>
      <div className="flex gap-[50px] mt-[50px] justify-between">
        <BlogsList />
        <Menu />
      </div>
    </div>
  );
};

export default Blogs;
