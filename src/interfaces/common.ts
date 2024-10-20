import { SortOrder } from '@/constants';
import { ReactNode } from 'react';

export type BaseParams = {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortBy?: keyof typeof SortOrder | null;
};

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };
