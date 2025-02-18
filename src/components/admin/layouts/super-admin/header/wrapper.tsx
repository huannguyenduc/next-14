import { WithChildrenProps } from '@/interfaces';
import React from 'react';

import * as S from './index.styles';

interface MainHeaderProps extends WithChildrenProps {
  isTwoColumnsLayout: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isTwoColumnsLayout, children }) => {
  return <S.Header $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>{children}</S.Header>;
};

export default MainHeader;
