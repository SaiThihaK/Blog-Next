"use client";
import React, { useState } from "react";
import BlogCard from "../../../components/shared/blogCard";
import PaginationButtons from "../../../components/shared/paginationButtons";
import { useGetBlogs } from "@/services/blog";
import { GetAllBlogPostsResponse } from "@/types/posts";
import { BlogListsSkeleton } from "@/components/shared/skeletons";

const limit = 3;

const PostCardsList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useGetBlogs<GetAllBlogPostsResponse>({
    page: currentPage,
    limit,
  });

  // For the next pagination button disable state.
  const nextPageDisabled = currentPage * limit >= (data?.total ?? 0);

  const onNextPage = () =>
    setCurrentPage((page) => {
      return page + 1;
    });
  const onPrevPage = () =>
    setCurrentPage((page) => {
      if (page === 1) return 1;
      return page - 1;
    });

  return (
    <div className="flex-5">
      <h1 className="mb-[30px] lg:mb-[50px]">Recent Posts</h1>
      <div className="flex flex-col gap-[50px] mb-[50px]">
        {isLoading ? (
          <BlogListsSkeleton />
        ) : (
          data?.data &&
          data?.data.length > 0 &&
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
      <PaginationButtons
        onNext={onNextPage}
        onPrev={onPrevPage}
        prevDisabled={currentPage === 1}
        nextDisabled={nextPageDisabled}
      />
    </div>
  );
};

export default PostCardsList;
