'use client';

import {
  DollarOutlined,
  GroupOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

import * as S from './index.styles';

interface ProfileNavItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  color: 'primary' | 'error' | 'warning' | 'success';
  href: string;
}

export const ProfileNav: React.FC = () => {
  const t = useTranslations('admin.doctor.profile');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const profileNavData: ProfileNavItem[] = [
    {
      id: 1,
      name: 'personalInfo.title',
      icon: <UserOutlined />,
      color: 'primary',
      href: '/',
    },
    {
      id: 2,
      name: 'members.title',
      icon: <GroupOutlined />,
      color: 'warning',
      href: '/members',
    },
    {
      id: 3,
      name: 'customer.title',
      icon: <UsergroupAddOutlined />,
      color: 'error',
      href: '/customer',
    },
    {
      id: 4,
      name: 'commission.title',
      icon: <DollarOutlined />,
      color: 'success',
      href: '/commission',
    },
  ];

  return (
    <S.Wrapper>
      {profileNavData.map((item) => (
        <S.Btn
          key={item.id}
          icon={item.icon}
          type="text"
          color={item.color}
          onClick={() => router.push(`/admin/doctors/${params?.id}` + item.href)}
          $isActive={`/admin/doctors/${params?.id}` + item.href === pathname}
        >
          {t(item.name)}
        </S.Btn>
      ))}
    </S.Wrapper>
  );
};
