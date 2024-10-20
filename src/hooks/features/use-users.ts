'use client';

import { GetUsersResponse, UserParams } from '@/interfaces';
import { request } from '@/services/axios';
import { AxiosResponse } from 'axios';
import useSWR from 'swr';

const getUsers = async (
  url: string,
  params: UserParams
): Promise<AxiosResponse<GetUsersResponse>> => {
  return request.get<UserParams, AxiosResponse<GetUsersResponse>>(url, params);
};

export const useGetUsers = (params: UserParams) => {
  const { data, error, isLoading, mutate } = useSWR(
    ['/users', params],
    ([url, params]) => getUsers(url, params),
    {
      keepPreviousData: true,
    }
  );

  return {
    data: data?.data,
    isLoading,
    isError: error,
    mutate,
  };
};
