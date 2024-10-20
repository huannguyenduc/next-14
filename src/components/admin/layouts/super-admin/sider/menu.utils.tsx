import { DashboardOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'siderMenu.dashboard',
    key: 'dashboard',
    url: '/admin',
    icon: <DashboardOutlined />,
  },
  {
    title: 'siderMenu.users',
    key: 'users',
    icon: <UserOutlined />,
    children: [
      {
        title: 'siderMenu.users',
        key: 'sub-menu',
        url: 'admin/users',
      },
    ],
  },
  {
    title: 'siderMenu.doctors',
    key: 'doctors',
    icon: <HomeOutlined />,
    url: '/admin/doctors',
  },
];
