import { Breadcrumb as AntBreadcrumb } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

export const Breadcrumb = styled(AntBreadcrumb)`
  &.ant-breadcrumb {
    ol {
      align-items: center;
    }
    li:last-child {
      .ant-breadcrumb-link {
        color: ${({ theme }) => theme.textMain};
      }
    }
  }
  .ant-breadcrumb-separator {
    color: ${({ theme }) => theme.textMain};
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

export const CurrentItem = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export const LinkItem = styled(Link)`
  color: ${({ theme }) => theme.textMain};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  display: flex !important;
  align-items: center;
  justify-content: center;
`;
