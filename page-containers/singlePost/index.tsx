'use client';

import Image from 'next/image';
import React from 'react';
import Menu from '../home/menu';
import Comments from '@/components/shared/comments';
import { useGetSingleBlog } from '@/services/blog';
import { useParams } from 'next/navigation';

const SinglePost = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlog(id as string);
  return (
    <div className="mt-[30px]">
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <div className="lg:hidden w-full h-[200px] relative mb-[30px]">
            <Image src="/p1.jpeg" alt="img" fill className="object-cover" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adpisicing elit.
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
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative flex-1 h-[350px]">
          <Image src="/p1.jpeg" alt="picture" fill className="object-cover" />
        </div>
      </div>
      <div className="flex gap-[50px] items-start">
        <div className="flex-5 flex gap-4 flex-col mt-[35px] lg:mt-[70px]">
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            quibusdam voluptatibus esse ut aut quae molestias totam? Incidunt,
            ad aspernatur! Doloribus culpa veritatis esse ea corporis ratione
            eaque optio sed. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum, repellat!
          </p>
          <h4 className="text-lg font-semibold">This is the blah blah Title</h4>
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            quibusdam voluptatibus esse ut aut quae molestias totam? Incidunt,
            ad aspernatur! Doloribus culpa veritatis esse ea corporis ratione
            eaque optio sed. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et ullam repellendus architecto! Architecto nulla dolor
            aliquid labore fugit consectetur quam sequi quidem a numquam modi,
            cupiditate porro, eum sunt error. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo fuga, accusamus veniam explicabo
            quas magnam consequatur, quam necessitatibus unde amet saepe, dolor
            sed inventore. Laboriosam natus ex placeat soluta alias!
          </p>
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            quibusdam voluptatibus esse ut aut quae molestias totam? Incidunt,
            ad aspernatur! Doloribus culpa veritatis esse ea corporis ratione
            eaque optio sed. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum, repellat!
          </p>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
