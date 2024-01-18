'use client';
import React from 'react';
import PostCard from '../../components/shared/blogCard';
import PaginationButtons from '../../components/shared/paginationButtons';
import { useGetBlogBySlug } from '@/services/blog';

const PostCardsList = () => {
  const { data } = useGetBlogBySlug();
  console.log('blogs == ', data);
  return (
    <div className="flex-5">
      <h1 className="mb-[30px] lg:mb-[50px]">Recent Posts</h1>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <PaginationButtons />
    </div>
  );
};

export default PostCardsList;
