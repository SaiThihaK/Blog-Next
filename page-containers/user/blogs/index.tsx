"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Menu from "../home/menu";
import PostCard from "@/components/shared/blogCard";
import PaginationButtons from "@/components/shared/paginationButtons";
import { useGetBlogs } from "@/services/blog";
import { GetAllBlogPostsResponse } from "@/types/posts";
import { BlogListsSkeleton } from "@/components/shared/skeletons";
import Link from "next/link";

const limit = 5;

const Blogs = () => {
  const searchParams = useSearchParams();
  const blogCategory = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useGetBlogs<GetAllBlogPostsResponse>({
    page: currentPage,
    limit,
    ...(blogCategory && { category: blogCategory }),
  });

  // For the next pagination button disable state.
  const nextPageDisabled = currentPage * limit > (data?.total ?? 0);

  const onNextPage = () =>
    setCurrentPage((page) => {
      return page + 1;
    });
  const onPrevPage = () =>
    setCurrentPage((page) => {
      return page - 1;
    });
  return (
    <div className="mt-[30px] grid col-span-1">
      <div className="w-full bg-orange-500 p-4">
        <h4 className="text-white text-xl lg:text-2xl capitalize font-bold text-center">
          {blogCategory ?? "all"} blogs
        </h4>
      </div>
      <div className="flex gap-[50px] mt-[50px] justify-between">
        <div className="flex-5">
          <h1 className="mb-[30px] lg:mb-[50px]">
            {data?.data?.length} Post{data?.data?.length! > 1 && "s"} Found
          </h1>
          <PaginationButtons
            onNext={onNextPage}
            onPrev={onPrevPage}
            prevDisabled={currentPage === 1}
            nextDisabled={nextPageDisabled}
          />
          <div className="flex flex-col gap-[50px] mb-[50px]">
            {isLoading ? (
              <BlogListsSkeleton />
            ) : (
              data?.data &&
              data.data.length > 0 &&
              data.data.map((post) => {
                return (
                  <Link href={`/blogs/${post.id}`} key={post.id}>
                    <PostCard
                      id={post.id}
                      title={post.title}
                      desc={post.desc as string}
                      category={post.category.category}
                      date={post.createdAt}
                      coverImage={post.image}
                    />
                  </Link>
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
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default Blogs;
