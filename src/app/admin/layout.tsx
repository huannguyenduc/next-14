'use client';

import MainContent from '@/components/admin/layouts/super-admin/content';
import { Header } from '@/components/admin/layouts/super-admin/header';
import MainHeader from '@/components/admin/layouts/super-admin/header/wrapper';
import * as S from '@/components/admin/layouts/super-admin/index.styles';
import MainSider from '@/components/admin/layouts/super-admin/sider';
import { theme } from 'antd';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';
import { useState } from 'react';

const PageLoader: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <NextTopLoader
      color={token.colorPrimary}
      initialPosition={1}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={500}
      shadow={`0 0 10px ${token.colorPrimary},0 0 5px ${token.colorPrimary}`}
    />
  );
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isTwoColumnsLayout] = useState(false);
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <>
      <PageLoader />
      <S.LayoutMaster>
        <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
        <S.LayoutMain>
          <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
            <Header
              toggleSider={toggleSider}
              isSiderOpened={!siderCollapsed}
              isTwoColumnsLayout={isTwoColumnsLayout}
            />
          </MainHeader>
          <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
            <div>{children}</div>
          </MainContent>
        </S.LayoutMain>
      </S.LayoutMaster>
    </>
  );
}
