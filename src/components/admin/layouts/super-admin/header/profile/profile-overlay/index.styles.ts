import { BaseDivider } from '@/components/common/base-divider';
import { BaseTypography } from '@/components/common/base-typography';
import { media } from '@/utils';
import styled from 'styled-components';

interface TextProps {
  $disabled?: boolean;
}

export const Text = styled(BaseTypography.Text)<TextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 0.875rem;
  font-weight: 600;

  span,
  a {
    display: block;
    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'};
  }

  @media only screen and (${media('md')}) {
    font-size: 1rem;
  }
`;

export const ItemsDivider = styled(BaseDivider)`
  margin: 0;
`;
