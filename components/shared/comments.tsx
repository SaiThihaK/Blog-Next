import Link from 'next/link';
import React from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Image from 'next/image';

const Comments = () => {
  const status = 'authenticated';
  return (
    <div className="mt-[30px] lg:mt-[50px]">
      <h1 className="mb-[30px] text-textSoftColor">Comments</h1>
      {status === 'authenticated' ? (
        <div className="flex gap-[12px]">
          <Textarea placeholder="Write your comment here" />
          <Button variant="success">Comment</Button>
        </div>
      ) : (
        <Link href="/login">Login to write comments</Link>
      )}
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex items-center mb-[20px] gap-[16px]">
            <div className="relative h-[40px] w-[40px]">
              <Image
                src="/p1.jpeg"
                alt="user pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0 lg:gap-[2px] text-textSoftColor">
              <span className="font-semibold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <div>
            <p className="text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ullam quia illum vitae porro quos dolorem maxime minus
              sapiente maiores sint magnam voluptates debitis quas repellendus,
              blanditiis eius saepe natus?
            </p>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center mb-[20px] gap-[16px]">
            <div className="relative h-[40px] w-[40px]">
              <Image
                src="/p1.jpeg"
                alt="user pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0 lg:gap-[2px] text-textSoftColor">
              <span className="font-semibold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ullam quia illum vitae porro quos dolorem maxime minus
              sapiente maiores sint magnam voluptates debitis quas repellendus,
              blanditiis eius saepe natus?
            </p>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center mb-[20px] gap-[16px]">
            <div className="relative h-[40px] w-[40px]">
              <Image
                src="/p1.jpeg"
                alt="user pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0 lg:gap-[2px] text-textSoftColor">
              <span className="font-semibold">John Doe</span>
              <span>01.01.2024</span>
            </div>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ullam quia illum vitae porro quos dolorem maxime minus
              sapiente maiores sint magnam voluptates debitis quas repellendus,
              blanditiis eius saepe natus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
