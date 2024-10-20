'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import * as S from './index.style';
import useDashboard from './index.utils';

const Dashboard: React.FC = () => {
  const t = useTranslations('admin');
  const { title } = useDashboard();

  return (
    <S.DashboardWrapper>
      <S.Card id="dashboard-content" title={title} padding="1.25rem 1.25rem 0">
        <S.WelcomeText>{t('dashboard.welcomeText')}</S.WelcomeText>
        {/* Add more dashboard components here */}
      </S.Card>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
