import appAxios from "@/lib/appAxios";
import { SWRResponse } from "swr";
import useSWRMutation from "swr/mutation";
import useSWR from "swr";
import { routeFilter } from "@/lib/utils";

type createBlogArg = {
  arg: {
    title: string;
    email: string;
    desc: any;
    image: string;
    categoryId: string;
  };
};

type UpdateBlogArg = {
  arg: {
    id: string;
    title: string;
    desc: TrustedHTML | string;
    email: string;
    categoryId: string;
    topPost: boolean;
    image: string;
  };
};
export const useCreateBlogs = () =>
  useSWRMutation(`/api/blogs`, (url, { arg }: createBlogArg) => {
    return appAxios.post(url, arg);
  });

export const useUpdateBlog = () =>
  useSWRMutation(`/api/blogs`, (url, { arg }: UpdateBlogArg) => {
    return appAxios.put(`${url}/${arg.id}`, arg);
  });

export const useGetBlogs = <ApiResponse>(params?: {
  page: number;
  limit: number;
  search?: string;
  category?: string;
}): SWRResponse<ApiResponse, any> => {
  return useSWR(`/api/blogs?${routeFilter(params)}`);
};

export const useGetSingleBlog = <ApiResponse>(
  id: string
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/api/blogs/${id}`);
};

export const useDeleteBlogs = () =>
  useSWRMutation(`/api/blogs`, (url, { arg }: { arg: { id: string } }) => {
    return appAxios.delete(`${url}/${arg.id}`);
  });
