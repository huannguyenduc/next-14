import { BaseButton } from '@/components/common/base-button';
import { BasePopconfirm } from '@/components/common/base-popconfirm';
import { useGetDoctors } from '@/hooks/features/use-doctors';
import { Doctor, DoctorParams, PaginationInterface } from '@/interfaces';
import { Flex } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ColumnsType } from 'antd/es/table';
import { ColumnTitle, Key } from 'antd/es/table/interface';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
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
  params: DoctorParams;
  tableData: DoctorTableState | any;
  options: (BaseOptionType | DefaultOptionType)[];
  columns: ColumnsType<Doctor>;
  getGenderName: (genderId?: number) => void;
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
  filterDoctor: 'fullName',
};

export default function useDoctors(): Utils {
  const t = useTranslations();
  const router = useRouter();
  const [params, setParams] = useState<DoctorParams>(inittialParams);
  const { data, isLoading } = useGetDoctors(params);

  const tableData = useMemo(() => {
    return {
      data: data?.doctors || [
        {
          id: 1,
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          address: '123 Main St, Anytown, USA',
        },
      ],
      pagination: {
        current: Number(params.page) || initialPagination.current,
        pageSize: params.pageSize || initialPagination.pageSize,
        total: data?.total || 0,
      },
    };
  }, [data, params]);

  const options = [{ value: 'name', label: t('doctors.name') }];

  const genders = [
    {
      id: 0,
      label: t('doctors.genders.male'),
    },
    {
      id: 1,
      label: t('doctors.genders.female'),
    },
    {
      id: 2,
      label: t('doctors.genders.other'),
    },
  ];

  const getGenderName = (genderId?: number) => {
    if (!genderId) return;
    return genders.find((gender) => gender.id == genderId)?.label;
  };

  const handleTableChange = (pagination: PaginationInterface) => {
    setParams((prev) => ({
      ...prev,
      page: pagination.current,
      pageSize: pagination.pageSize,
    }));
  };

  const handleParamsChange = (key: string, value: unknown) => {
    setParams((prev) => ({ ...prev, page: 1, [key]: value }));
  };

  const columns: ColumnsType<Doctor> = [
    {
      title: t('common.id'),
      dataIndex: 'accountId',
      key: 'id',
      width: '5%',
      render: (text: string) => <span>{text}</span>,
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
      title: t('common.address'),
      dataIndex: 'address',
      key: 'address',
      width: '10%',
    },
    {
      title: t('common.actions'),
      dataIndex: 'actions',
      key: 'actions',
      width: '10%',
      render: (_, record) => (
        <Flex gap={10}>
          <BaseButton severity="success">{t('common.approve')}</BaseButton>
          <BasePopconfirm
            title={t('common.deleteQuestion', { name: t('admin.doctors.request') })}
            onConfirm={() => {}}
          >
            <BaseButton severity="error">{t('common.reject')}</BaseButton>
          </BasePopconfirm>
          <BaseButton severity="info" onClick={() => router.push(`/admin/doctors/${record.id}`)}>
            {t('common.view')}
          </BaseButton>
        </Flex>
      ),
    },
  ];

  return {
    loading: isLoading,
    params,
    options,
    tableData,
    columns,
    getGenderName,
    handleParamsChange,
    handleTableChange,
  };
}
