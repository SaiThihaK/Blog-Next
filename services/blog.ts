import appAxios from "@/lib/appAxios";
import { SWRResponse } from "swr";
import useSWRMutation from "swr/mutation";
import useSWR from "swr";

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

export const useGetBlogs = <ApiResponse>(
  page: number = 1,
  limit: number = 3,
  category: string | null
): SWRResponse<ApiResponse, any> => {
  return useSWR(
    `/api/blogs?page=${page}&limit=${limit}&category=${category ?? ""}`
  );
};

export const useGetSingleBlog = <ApiResponse>(
  id: string
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/api/blogs/${id}`);
};

export const useDeleteBlog = (id: string) =>
  useSWRMutation(`/api/blogs/${id}`, (url) => {
    return appAxios.delete(url);
  });
