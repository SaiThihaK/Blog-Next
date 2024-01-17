import appAxios from "@/lib/appAxios";
import { User } from "@/types/users";
import useSWRMutation from "swr/mutation";

type createBlogArg = {
  arg: {
    title: string;
    email: string;
    desc: string;
    image: string;
    category: string;
  };
};
export const useCreateBlogs = () =>
  useSWRMutation(`/api/blogs`, (url, { arg }: createBlogArg) => {
    return appAxios.post(url, arg);
  });
