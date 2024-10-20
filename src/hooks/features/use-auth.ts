'use client';

import { LoginRequest, LoginResponse } from '@/interfaces';
import { request } from '@/services/axios';
import { AxiosResponse } from 'axios';
import useSWRMutation from 'swr/mutation';

const login = async (
  url: string,
  { arg }: { arg: LoginRequest }
): Promise<AxiosResponse<LoginResponse>> => {
  return request.post<LoginRequest, AxiosResponse<LoginResponse>>(url, arg);
};

export const useLogin = () => useSWRMutation('/auth/login', login);
