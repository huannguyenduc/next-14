'use client';

import defaultImg from '@/assets/images/auth-bg.webp';
import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseCol } from '@/components/common/base-col';
import { BasePopover } from '@/components/common/base-popover';
import { BaseRow } from '@/components/common/base-row';
import { useResponsive } from '@/hooks/common/useResponsive';
import React from 'react';

import { ProfileOverlay } from '../profile-overlay';
import * as S from './index.styles';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  return (
    <BasePopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[5, 10]} align="middle">
        <BaseCol>
          <BaseAvatar src={defaultImg.src} alt="User" shape="circle" size={30} />
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <S.UserName>Admin</S.UserName>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BasePopover>
  );
};
