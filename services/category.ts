import appAxios from '@/lib/appAxios';
import { SWRResponse } from 'swr';
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';

type CreateCategoryArg = {
  arg: {
    category: string;
    color: string;
  };
};

type UpdateCategoryArg = {
  arg: {
    id: string;
    category: string;
    color: string;
  };
};

export const useCreateCategory = () =>
  useSWRMutation(`/api/category`, (url, { arg }: CreateCategoryArg) => {
    return appAxios.post(url, arg);
  });

export const useUpdateCategory = () =>
  useSWRMutation(`/api/category`, (url, { arg }: UpdateCategoryArg) => {
    return appAxios.put(url, arg);
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
export const useDeleteCategroy = () =>
  useSWRMutation(`/api/category`, (url, { arg }: { arg: { id: string } }) => {
    return appAxios.delete(`${url}/${arg.id}`);
  });
