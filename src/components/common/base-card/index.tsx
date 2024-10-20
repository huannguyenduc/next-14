import { useResponsive } from '@/hooks/common/useResponsive';
import type { WidthCategories } from '@/interfaces';
import { CardProps } from 'antd';
import React from 'react';

import * as S from './index.styles';

export interface BaseCardProps extends CardProps {
  className?: string;
  padding?: string | number | readonly [number, number];
  autoHeight?: boolean;
}

export const defaultPaddings = {
  xs: [30, 16],
  md: [40, 30],
  xl: [50, 60],
} as const satisfies WidthCategories;

export const BaseCard: React.FC<BaseCardProps> = ({
  className,
  padding,
  size,
  autoHeight = true,
  children,
  ...props
}) => {
  const { isTablet, breakpoint } = useResponsive();

  return (
    <S.Card
      size={size ?? (isTablet ? 'default' : 'small')}
      className={className}
      bordered={false}
      $padding={padding || padding === 0 ? padding : defaultPaddings[breakpoint]}
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  );
};
