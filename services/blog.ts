import appAxios from '@/lib/appAxios';
import { SWRResponse } from 'swr';
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';
import { routeFilter } from '@/lib/utils';

type createBlogArg = {
  arg: {
    title: string;
    email: string;
    desc: any;
    image: string;
    categoryId: string;
  };
};
export const useCreateBlogs = () =>
  useSWRMutation(`/api/blogs`, (url, { arg }: createBlogArg) => {
    return appAxios.post(url, arg);
  });

export const useGetBlogs = <ApiResponse>(params?: {
  page: number;
  limit: number;
  category?: string;
}): SWRResponse<ApiResponse, any> => {
  return useSWR(`/api/blogs?${routeFilter(params)}`);
};

export const useGetSingleBlog = <ApiResponse>(
  id: string
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/api/blogs/${id}`);
};

export const useDeleteBlog = (id: string) =>
  useSWRMutation(`/api/blogs/${id}`, (url) => {
    console.log(url, id);
    return appAxios.delete(url);
  });
