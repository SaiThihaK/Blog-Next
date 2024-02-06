import appAxios from '@/lib/appAxios';
import useSWR, { SWRResponse } from 'swr';
import useSWRMutation from 'swr/mutation';

type CreateSocialLinkArg = {
  arg: {
    type: string;
    socialLink: string;
  };
};

type UpdateSocialLinkArg = {
  arg: {
    id: string;
    type: string;
    socialLink: string;
  };
};

export const useCreateSocialLink = () =>
  useSWRMutation('/api/socialmedia', (url, { arg }: CreateSocialLinkArg) => {
    return appAxios.post(url, arg);
  });

export const useUpdateSocialLink = () =>
  useSWRMutation('/api/socialmedia', (url, { arg }: UpdateSocialLinkArg) => {
    return appAxios.put(url, arg);
  });

export const useGetSocialLinks = <ApiResponse>(): SWRResponse<
  ApiResponse,
  any
> => {
  return useSWR('/api/socialmedia');
};

export const useDeleteSocialLink = () =>
  useSWRMutation(
    '/api/socialmedia',
    (url, { arg }: { arg: { id: string } }) => {
      return appAxios.delete(`${url}${arg.id}`);
    }
  );
