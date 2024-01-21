'use client';

import Image from 'next/image';
import React from 'react';
import Menu from '../home/menu';
import Comments from '@/components/shared/comments';
import { useGetSingleBlog } from '@/services/blog';
import { useParams } from 'next/navigation';
import { GetSingleBlogPostResponse } from '@/types/posts';
import { formatDate } from '@/lib/utils';

const SinglePost = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useGetSingleBlog<GetSingleBlogPostResponse>(
    id as string
  );
  console.log('singel post date ==== ', blog);
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="mt-[30px]">
          <div className="flex items-center gap-[50px]">
            <div className="flex-1">
              <div className="lg:hidden w-full h-[200px] relative mb-[30px]">
                <Image
                  src={blog?.data.image!}
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-[30px]">
                {blog?.data.title}
              </h1>
              <div className="flex items-center gap-[16px]">
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src="/p1.jpeg"
                    alt="user pic"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[2px] text-textSoftColor">
                  <span className="font-semibold">John Doe</span>
                  <span className="text-sm">
                    {formatDate(blog?.data.createdAt!)}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative flex-1 h-[350px]">
              <Image
                src={blog?.data.image!}
                alt="picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex gap-[50px] items-start">
            <div className="flex-5 flex gap-4 flex-col mt-[35px] lg:mt-[70px]">
              <div
                className="desc-container leading-7"
                dangerouslySetInnerHTML={{ __html: blog?.data.desc! }}
              ></div>
              <div>
                <Comments />
              </div>
            </div>
            <Menu />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
