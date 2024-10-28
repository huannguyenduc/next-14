import { GlobalSpinner } from '@/components/common/base-spinner/global-spinner';
import React from 'react';
import styled, { useTheme } from 'styled-components';

interface LoadingProps {
  size?: string;
  color?: string;
}

export const BaseLoading: React.FC<LoadingProps> = ({ size, color }) => {
  const theme = useTheme();
  const spinnerColor = color || theme.spinnerBase;

  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={spinnerColor} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
