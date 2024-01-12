import React from 'react';
import PostCard from './postCard';

const PostCardsList = () => {
  return (
    <div className="flex-5">
      <h1 className="mb-[30px] lg:mb-[50px]">Recent Posts</h1>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostCardsList;
