'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Menu from '../home/menu';
import PostCard from '@/components/shared/blogCard';
import PaginationButtons from '@/components/shared/paginationButtons';
import { useGetBlogs } from '@/services/blog';
import { GetAllBlogPostsResponse } from '@/types/posts';
import { BlogListsSkeleton } from '@/components/shared/skeletons';

const Blogs = () => {
  const searchParams = useSearchParams();
  const blogCategory = searchParams.get('category');
  const { data, isLoading, error } = useGetBlogs<GetAllBlogPostsResponse>();
  return (
    <div className="mt-[30px] grid col-span-1">
      <div className="w-full bg-orange-500 p-4">
        <h4 className="text-white text-xl lg:text-2xl capitalize font-bold text-center">
          {blogCategory ?? 'all'} blogs
        </h4>
      </div>
      <div className="flex gap-[50px] mt-[50px] justify-between">
        <div className="flex-5">
          <h1 className="mb-[30px] lg:mb-[50px]">
            {data?.data.length} Posts Found
          </h1>
          <div className="flex flex-col gap-[50px] mb-[50px]">
            {isLoading ? (
              <BlogListsSkeleton />
            ) : (
              data?.data.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    desc={post.desc as string}
                    category={post.category.category}
                    date={post.createdAt}
                    coverImage={post.image}
                  />
                );
              })
            )}
          </div>
          <PaginationButtons />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Blogs;
