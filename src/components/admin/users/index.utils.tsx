import EyeIcon from '@/assets/svg/icon-eye.svg';
import { DATE_FORMAT } from '@/constants';
import { useGetUsers } from '@/hooks/features/use-users';
import { PaginationInterface, User, UserParams } from '@/interfaces';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ColumnsType } from 'antd/es/table';
import { ColumnTitle, Key } from 'antd/es/table/interface';
import dayjs from 'dayjs';
import { pickBy } from 'lodash';
import { useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';

interface UserTableState {
  data: User[];
  pagination: PaginationInterface;
}

export interface ICollum {
  label: ColumnTitle<User>;
  key: Key | undefined;
}

interface Utils {
  loading: boolean;
  params: UserParams;
  tableData: UserTableState;
  options: (BaseOptionType | DefaultOptionType)[];
  columns: ColumnsType<User>;
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
  filterUser: 'fullName',
};

export default function useUsers(): Utils {
  const t = useTranslations('admin');
  const [params, setParams] = useState<UserParams>(inittialParams);
  const { data, isLoading } = useGetUsers(pickBy(params));

  const tableData = useMemo(() => {
    return {
      data: data?.users || [],
      pagination: {
        current: Number(1) || initialPagination.current,
        pageSize: initialPagination.pageSize,
        total: initialPagination.total,
      },
    };
  }, [data]);

  const options = [
    { value: 'fullName', label: t('users.name') },
    { value: 'kanaJapanese', label: t('users.kanaName') },
    { value: 'companyName', label: t('users.company') },
    { value: 'country', label: t('users.country') },
  ];

  const genders = [
    {
      id: 0,
      label: t('users.genders.male'),
    },
    {
      id: 1,
      label: t('users.genders.female'),
    },
    {
      id: 2,
      label: t('users.genders.other'),
    },
  ];

  const getGenderName = (genderId?: number) => {
    if (!genderId) return;
    return genders.find((gender) => gender.id == genderId)?.label;
  };

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

  const columns: ColumnsType<User> = [
    {
      title: t('users.id'),
      dataIndex: 'accountId',
      key: 'accountId',
      width: '5%',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: t('users.name'),
      dataIndex: 'fullName',
      key: 'fullName',
      width: '10%',
    },
    {
      title: t('users.kanaName'),
      dataIndex: 'kanaJapanese',
      key: 'kanaJapanese',
      width: '10%',
    },
    {
      title: t('users.company'),
      dataIndex: 'companyName',
      key: 'companyName',
      width: '10%',
    },
    {
      title: t('users.email'),
      dataIndex: 'email',
      key: 'email',
      width: '10%',
    },
    {
      title: t('users.gender'),
      dataIndex: 'gender',
      key: 'gender',
      width: '5%',
      render: (value) => {
        console.log('value', getGenderName(value));
        return <>{getGenderName(value)}</>;
      },
    },
    {
      title: t('users.birthday'),
      dataIndex: 'birth',
      key: 'birth',
      width: '10%',
      render: (value) => {
        return <> {dayjs(value).format(DATE_FORMAT.BASIC_DATE)}</>;
      },
    },
    {
      title: t('users.country'),
      dataIndex: 'collection_address',
      key: 'collection_address',
      width: '10%',
      render: (value) => {
        if (value.length > 0)
          return <>{value?.find((item: any) => item?.is_default === true)?.country}</>;
        return <>---</>;
      },
    },
    {
      title: t('users.shippingAddress'),
      dataIndex: 'collection_address',
      key: 'collection_address',
      width: '10%',
      render: (value) => {
        if (value.length > 0)
          return <>{value?.find((item: any) => item?.is_default === true)?.address}</>;
        return <>---</>;
      },
    },
    {
      title: t('users.magazineSubscription'),
      dataIndex: 'receive_mail',
      key: 'receive_mail',
      width: '10%',
      render: (value) => {
        return <> {value ? t('users.yes') : t('users.no')}</>;
      },
    },
    {
      title: t('users.purchaseHistory'),
      dataIndex: 'purchaseHistory',
      key: 'purchaseHistory',
      width: '10%',
      render: () => (
        <div>
          <EyeIcon />
        </div>
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
