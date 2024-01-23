'use client';
import React from 'react';
import BlogCard from '../../../components/shared/blogCard';
import PaginationButtons from '../../../components/shared/paginationButtons';
import { useGetBlogs } from '@/services/blog';
import { GetAllBlogPostsResponse } from '@/types/posts';
import { BlogListsSkeleton } from '@/components/shared/skeletons';

const PostCardsList = () => {
  const { data, isLoading, error } = useGetBlogs<GetAllBlogPostsResponse>();
  console.log('blogs == ', data);

  return (
    <div className="flex-5">
      <h1 className="mb-[30px] lg:mb-[50px]">Recent Posts</h1>
      <div className="flex flex-col gap-[50px] mb-[50px]">
        {isLoading ? (
          <BlogListsSkeleton />
        ) : (
          data?.data.map((post) => {
            return (
              <BlogCard
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
  );
};

export default PostCardsList;
