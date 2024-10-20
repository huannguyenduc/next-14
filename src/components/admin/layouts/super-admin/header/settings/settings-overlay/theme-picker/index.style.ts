import { BaseButton } from '@/components/common/base-button';
import { BORDER_RADIUS } from '@/constants';
import styled, { css } from 'styled-components';

interface BtnProps {
  $isFirstActive: boolean;
}

export const Btn = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn-icon-only.ant-btn-sm {
    height: 1.875rem;
  }
`;

export const ButtonGroup = styled.div<BtnProps>`
  display: inline-flex;
  padding: 0.325rem;
  column-gap: 0.325rem;

  border-radius: ${BORDER_RADIUS};

  background-color: ${({ theme }) => theme.primary};

  ${(props) =>
    props.$isFirstActive
      ? css`
          & > ${Btn}:first-of-type {
            background: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.textSecondary};
          }
        `
      : css`
          & > ${Btn}:last-of-type {
            background: ${({ theme }) => theme.warning};
            color: ${({ theme }) => theme.textSecondary};
          }
        `}

  &:not(:last-of-type) {
    margin-bottom: 0.625rem;
  }
`;
