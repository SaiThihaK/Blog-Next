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
    category: string;
  };
};
export const useCreateBlogs = () =>
  useSWRMutation(`/api/blogs`, (url, { arg }: createBlogArg) => {
    return appAxios.post(url, arg);
  });

export const useGetBlogBySlug = (): SWRResponse => {
  return useSWR(`/api/blogs`);
};

export const useGetSingleBlog = (id: string): SWRResponse => {
  return useSWR(`/api/blogs/${id}`);
};

export const useDeleteBlog = (id: string) =>
  useSWRMutation(`/api/blogs/${id}`, (url) => {
    return appAxios.delete(url);
  });
