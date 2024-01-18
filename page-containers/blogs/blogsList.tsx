import React from 'react';
import PostCard from '../../components/shared/blogCard';
import PaginationButtons from '../../components/shared/paginationButtons';

const BlogsList = () => {
  return (
    <div className="flex-5">
      <h1 className="mb-[30px] lg:mb-[50px]">3 Posts Found</h1>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <PaginationButtons />
    </div>
  );
};

export default BlogsList;
