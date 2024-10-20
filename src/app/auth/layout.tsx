'use client';

import * as S from '@/components/auth/index.styles';
import { theme } from 'antd';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

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

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      <S.Wrapper>
        <S.BackgroundWrapper>
          <S.LoginWrapper>{children}</S.LoginWrapper>
        </S.BackgroundWrapper>
      </S.Wrapper>
    </>
  );
}
