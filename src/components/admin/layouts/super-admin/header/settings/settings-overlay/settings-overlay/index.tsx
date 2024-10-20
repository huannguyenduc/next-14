'use client';

import { DropdownCollapse } from '@/components/admin/layouts/super-admin/header/index.styles';
import { BaseCollapseProps } from '@/components/common/base-collapse/base-collapse';
import React, { useMemo } from 'react';

import { LanguagePicker } from '../language-picker';
import { ThemePicker } from '../theme-picker';
import * as S from './index.styles';

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const items: BaseCollapseProps['items'] = useMemo(
    () => [
      {
        label: 'Change language',
        key: 'languagePicker',
        children: <LanguagePicker />,
      },
      {
        label: 'Change theme',
        key: 'themePicker',
        children: <ThemePicker />,
      },
    ],
    []
  );

  return (
    <S.SettingsOverlayMenu {...props}>
      <DropdownCollapse
        bordered={false}
        expandIconPosition="end"
        ghost
        defaultActiveKey="themePicker"
        items={items}
      />
    </S.SettingsOverlayMenu>
  );
};
