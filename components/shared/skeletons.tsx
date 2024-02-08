import { Skeleton } from '../ui/skeleton';

export const CategoryListsSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-between gap-[20px]">
      <Skeleton className="rounded-sm h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"></Skeleton>
      <Skeleton className="rounded-sm h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"></Skeleton>
      <Skeleton className="rounded-sm h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"></Skeleton>
      <Skeleton className="rounded-sm h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"></Skeleton>
      <Skeleton className="rounded-sm h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"></Skeleton>
      <Skeleton className="rounded-sm h-[80px] w-full sm:w-[45%] md:w-[25%] xl:w-[15%]"></Skeleton>
    </div>
  );
};

export const BlogSkeleton = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <Skeleton className="flex-1 h-[350px] rounded-md"></Skeleton>
      <div className="flex-1">
        <Skeleton className="rounded-lg w-5/12 h-[24px]" />
        <Skeleton className="rounded-lg w-6/12 h-[24px] mt-[8px]" />
        <Skeleton className="rounded-md w-10/12 h-[120px] mt-[8px]" />
      </div>
    </div>
  );
};

export const BlogListsSkeleton = () => {
  return (
    <>
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </>
  );
};

export const SocialLinksSkelton = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-[30px] h-[30px] rounded-full" />
      <Skeleton className="w-[30px] h-[30px] rounded-full" />
      <Skeleton className="w-[30px] h-[30px] rounded-full" />
      <Skeleton className="w-[30px] h-[30px] rounded-full" />
    </div>
  );
};
