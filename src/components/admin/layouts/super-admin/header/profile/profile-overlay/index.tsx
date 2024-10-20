'use client';

import { BaseButton } from '@/components/common/base-button';
import { RouterPath } from '@/constants';
import { useFeedback } from '@/hooks/common/useFeedback';
import { LogoutOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React from 'react';

import * as S from './index.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { push } = useRouter();
  const { notification } = useFeedback();

  const handleLogout = () => {
    push(RouterPath.LOGIN);
    notification.success({ message: 'Logout success' });
  };

  return (
    <div {...props}>
      {/* <S.Text disabled>
        <Link href="javascript:void(0)">{t('header.profile')}</Link>
      </S.Text>
      <S.ItemsDivider /> */}
      <S.Text>
        <BaseButton type="link" onClick={handleLogout}>
          <LogoutOutlined />
          Logout
        </BaseButton>
        {/* <Link href="javascript:void(0)"></Link> */}
      </S.Text>
    </div>
  );
};
