'use client';

import { DoctorParams, GetDoctorsResponse } from '@/interfaces';
import { request } from '@/services/axios';
import { AxiosResponse } from 'axios';
import useSWR from 'swr';

const getDoctors = async (
  url: string,
  params: DoctorParams
): Promise<AxiosResponse<GetDoctorsResponse>> => {
  return request.get<DoctorParams, AxiosResponse<GetDoctorsResponse>>(url, params);
};

export const useGetDoctors = (params: DoctorParams) => {
  const { data, error, isLoading, mutate } = useSWR(
    ['/doctors', params],
    ([url, params]) => getDoctors(url, params),
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
