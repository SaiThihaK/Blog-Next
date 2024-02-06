import appAxios from "@/lib/appAxios";
import { User } from "@/types/users";
import useSWRMutation from "swr/mutation";

type SignInArg = {
  arg: {
    name: string;
    email: string;
    password: string;
  };
};
export const useLogin = () =>
  useSWRMutation(`/api/register`, (url, { arg }: SignInArg) => {
    return appAxios.post<User>(url, arg);
  });
