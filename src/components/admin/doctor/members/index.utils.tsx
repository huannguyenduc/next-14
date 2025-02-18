import { BaseButton } from '@/components/common/base-button';
import { useGetDoctors } from '@/hooks/features/use-doctors';
import { Doctor, DoctorParams, PaginationInterface } from '@/interfaces';
import { ColumnsType } from 'antd/es/table';
import { ColumnTitle, Key } from 'antd/es/table/interface';
import { pickBy } from 'lodash';
import { useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';

interface DoctorTableState {
  data: Doctor[];
  pagination: PaginationInterface;
}

export interface ICollum {
  label: ColumnTitle<Doctor>;
  key: Key | undefined;
}

interface Utils {
  loading: boolean;
  addModalOpen: boolean;
  params: DoctorParams;
  tableData: DoctorTableState;
  columns: ColumnsType<Doctor>;
  setAddModalOpen: (value: boolean) => void;
  handleParamsChange: (key: string, value: unknown) => void;
  handleTableChange: (pagination: PaginationInterface) => void;
}

const initialPagination: PaginationInterface = {
  current: 1,
  pageSize: 10,
};

const inittialParams = {
  page: 1,
  pageSize: initialPagination.pageSize,
  sortBy: null,
  sortField: '',
  search: '',
  filterMember: 'fullName',
};

export default function useMembers(): Utils {
  const t = useTranslations();
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [params, setParams] = useState<DoctorParams>(inittialParams);
  const { data, isLoading } = useGetDoctors(pickBy(params));

  const tableData: any = useMemo(() => {
    return {
      data: data?.doctors || [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
      ],
      pagination: {
        current: Number(1) || initialPagination.current,
        pageSize: initialPagination.pageSize,
        total: initialPagination.total,
      },
    };
  }, [data]);

  const handleTableChange = (pagination: PaginationInterface) => {
    setParams((prev) => {
      return {
        ...prev,
        page: pagination.current,
      };
    });
  };

  const handleParamsChange = (key: string, value: unknown) => {
    setParams((prev) => {
      return { ...prev, page: 1, [key]: value };
    });
  };

  const columns: ColumnsType<Doctor> = [
    {
      title: t('common.id'),
      dataIndex: 'id',
      key: 'id',
      width: '5%',
    },
    {
      title: t('common.name'),
      dataIndex: 'fullName',
      key: 'fullName',
      width: '10%',
    },
    {
      title: t('common.email'),
      dataIndex: 'email',
      key: 'email',
      width: '10%',
    },

    {
      title: t('common.actions'),
      dataIndex: 'actions',
      key: 'actions',
      width: '10%',
      render: () => (
        <BaseButton size="small" severity="info">
          {t('common.view')}
        </BaseButton>
      ),
    },
  ];

  return {
    loading: isLoading,
    params,
    tableData,
    addModalOpen,
    columns,
    setAddModalOpen,
    handleParamsChange,
    handleTableChange,
  };
}
