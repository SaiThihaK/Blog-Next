"use client";

import { formatDate } from "@/lib/utils";
import { useGetBlogs } from "@/services/blog";
import { GetAllBlogPostsResponse } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";

type Props = {
  setOpenSearch: (x: boolean) => void;
};

const SearchBrowse: React.FC<Props> = ({ setOpenSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading, mutate } = useGetBlogs<GetAllBlogPostsResponse>({
    page: 1,
    limit: 10,
    search: searchValue,
  });
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    mutate();
  };
  return (
    <div className="p-3 shadow-lg">
      <div className="flex justify-end">
        <X onClick={() => setOpenSearch(false)} />
      </div>
      <div className="p-2 w-full">
        <Input
          className="border-1 border-black bg-[#f8f8f8]"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
      <div className="p-2 w-full">
        {!isLoading ? (
          <div>
            {/* <div>"{data?.total} blogs"</div> */}
            <div className="max-h-[300px] overflow-y-scroll">
              {data?.data && data.data.length > 0 ? (
                data.data.map((blog, index) => (
                  <Link
                    href={`/blogs/${blog.id}`}
                    key={index}
                    onClick={() => setOpenSearch(false)}
                  >
                    <div className="flex flex-wrap gap-2 p-3 hover:bg-[#f8f8f8] cursor-pointer">
                      <div className="w-[60px] h-[40px]">
                        <Image
                          className="w-full h-full"
                          src={blog.image}
                          alt={blog.title}
                          width={100}
                          height={10}
                        />
                      </div>
                      <div>
                        <div className="text-sm">{blog.title}</div>
                        <div className="text-xs">
                          {formatDate(blog.createdAt)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div>No Blog Founded</div>
              )}
            </div>
          </div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default SearchBrowse;
