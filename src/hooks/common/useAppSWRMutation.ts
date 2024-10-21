import { AxiosError, AxiosResponse } from 'axios';
import { Key } from 'swr/_internal';
import useSWRMutation, { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation';

interface Return<Data, Error>
  extends Pick<
    SWRMutationResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isMutating' | 'error' | 'trigger' | 'reset'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
  isLoading: boolean;
}

export const useAppSWRMutation = <
  Data = any,
  Error = any,
  SWRMutationKey extends Key = Key,
  ExtraArg = never,
  SWRData = Data
>(
  key: SWRMutationKey,
  axiosFetcher: (...args: any) => Promise<AxiosResponse<Data>>,
  options?: SWRMutationConfiguration<Data, Error, SWRMutationKey, ExtraArg, SWRData>
): Return<Data, Error> => {
  const {
    data: response,
    error,
    isMutating,
    trigger,
    reset,
  } = useSWRMutation<AxiosResponse<Data>, AxiosError<Error>>(key, axiosFetcher, options as any);

  const data = response && response.data;
  const isLoading = !error && !data;

  return {
    data,
    response,
    error,
    isMutating,
    isLoading,
    trigger,
    reset,
  };
};
