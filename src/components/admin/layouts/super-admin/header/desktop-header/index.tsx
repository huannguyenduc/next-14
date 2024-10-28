import { BaseBreadcrumb } from '@/components/common/base-breadcrumb';
import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import { BaseTypography } from '@/components/common/base-typography';
import { usePathname } from 'next/navigation';
import React from 'react';

import * as S from '../index.styles';
import { ProfileDropdown } from '../profile/profile-dropdown';
import { SettingsDropdown } from '../settings';

const { Title } = BaseTypography;

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const pathname = usePathname();

  const breadcrumbItems = React.useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    return [
      ...pathSegments.map((segment, index) => ({
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: `/${pathSegments.slice(0, index + 1).join('/')}`,
      })),
    ];
  }, [pathname]);

  return (
    <BaseRow justify="space-between" align="middle">
      <BaseCol lg={10} xxl={8}>
        <Title style={{ fontWeight: 700, marginBottom: 0 }} level={4}>
          {breadcrumbItems[breadcrumbItems.length - 1].title}
        </Title>
        <BaseBreadcrumb items={breadcrumbItems} separator=">" />
      </BaseCol>
      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <BaseRow align="middle" justify="end" gutter={[5, 5]}>
          <BaseCol>
            <SettingsDropdown />
          </BaseCol>

          <BaseCol>
            <ProfileDropdown />
          </BaseCol>
        </BaseRow>
      </S.ProfileColumn>
    </BaseRow>
  );
};
