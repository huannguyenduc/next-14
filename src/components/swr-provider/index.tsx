'use client';

import { ResponseCode } from '@/constants';
import { useFeedback } from '@/hooks/common/useFeedback';
import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export type ProviderProps = PropsWithChildren<{}>;

const SWRProvider = ({ children }: ProviderProps) => {
  const { notification } = useFeedback();
  return (
    <SWRConfig
      value={{
        onError: (error) => {
          if (error?.status === ResponseCode.BAD_REQUEST) {
            notification.error({ message: error?.data?.message });
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
