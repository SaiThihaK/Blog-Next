import appAxios from '@/lib/appAxios';
import { SWRResponse } from 'swr';
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';

type createCategoryArg = {
  arg: {
    category: string;
  };
};
export const useCreateCategory = () =>
  useSWRMutation(`/api/category`, (url, { arg }: createCategoryArg) => {
    return appAxios.post(url, arg);
  });

export const useGetCategory = <ApiResponse>(): SWRResponse<
  ApiResponse,
  any
> => {
  return useSWR(`/api/category`);
};

export const useGetSingleCategory = (id: string): SWRResponse => {
  return useSWR(`/api/category/${id}`);
};

export const useDeleteCategory = (id: string) =>
  useSWRMutation(`/api/category/${id}`, (url) => {
    return appAxios.delete(url);
  });
