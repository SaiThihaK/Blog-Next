import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
  return (
    <div className="mt-[30px]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        <b className="font-bold">Hey, next dev here! </b>
        <b className="font-normal">Discover my stories and creative ideas.</b>
      </h1>
      <div className="mt-[30px] lg:mt-[60px] flex items-center gap-[50px]">
        <div className="flex-1 h-[500px] relative hidden lg:block">
          <Image
            src="/p1.jpeg"
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Some Exapple Blah Blah Blah Blog Post Title
          </h1>
          <p className="text-base lg:text-lg font-normal text-textSoftColor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vel
            doloribus unde odio placeat, voluptate dolores repudiandae, magni
            ipsa totam voluptatum quidem nesciunt? Porro commodi eos praesentium
            eveniet. Iste, fuga.
          </p>
          <Button className="w-min">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
