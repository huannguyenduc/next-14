import { normalizeProp } from '@/utils';
import { media } from '@/utils';
import { Card as AntCard } from 'antd';
import styled, { css } from 'styled-components';

interface CardInternalProps {
  $padding: string | number | readonly [number, number];
  $autoHeight: boolean;
}

export const Card = styled(AntCard)<CardInternalProps>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$autoHeight &&
    css`
      height: 100%;
    `}

  .ant-card-head {
    border-bottom: 0;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    padding-top: 15px;
    padding-bottom: 15px;
    min-height: 36px;

    @media only screen and (${media('md')}) {
      padding-top: 20px;
      padding-bottom: 0;
      min-height: 48px;
    }

    @media only screen and (${media('xl')}) {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }

    .ant-card-head-title {
      white-space: unset;
      overflow: unset;
      padding-bottom: 0;

      @media only screen and (${media('xl')}) {
        padding-bottom: 0.25rem;
      }
    }
  }

  .ant-card-body {
    flex-grow: 1;
    padding: ${(props) => props.$padding && normalizeProp(props.$padding)};
  }

  .ant-card-bordered {
    border-color: ${({ theme }) => theme.split};
  }
`;
