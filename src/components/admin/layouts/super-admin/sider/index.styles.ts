import { BaseButton } from '@/components/common/base-button';
import { BaseLayout } from '@/components/common/base-layout';
import { BaseMenu } from '@/components/common/base-menu';
import { LAYOUT } from '@/constants';
import { media } from '@/utils';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Sider = styled(BaseLayout.Sider)`
  overflow: visible;
  right: 0;
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (${media('md')}) {
    right: unset;
    left: 0;
  }

  &.ant-layout-sider {
    position: fixed;
    background: ${({ theme }) => theme.layoutSiderBg};

    @media only screen and (${media('xl')}) {
      position: unset;
    }
  }
`;

interface Collapse {
  $isCollapsed: boolean;
}

export const CollapseButton = styled(BaseButton)<Collapse>`
  background: ${({ theme }) => theme.collapseBackground};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -1rem;
    `}

  &.ant-btn:not(:disabled):hover,
  &.ant-btn:not(:disabled):focus {
    color: ${({ theme }) => theme.textSecondary};
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and (${media('md')}) {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  svg {
    color: ${({ theme }) => theme.white};
    font-size: 2rem;
  }
`;

export const SiderLogoDiv = styled.div`
  height: ${LAYOUT.mobile.headerHeight};
  padding: ${({ theme }) => theme.paddings.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (${media('md')}) {
    height: ${LAYOUT.desktop.headerHeight};
    padding-top: ${({ theme }) => theme.paddings.md};
    padding-bottom: ${({ theme }) => theme.paddings.md};
  }
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.white};
`;

export const Menu = styled(BaseMenu)`
  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item.ant-menu-item-selected::after {
    border-color: ${({ theme }) => theme.primary};
  }

  .ant-menu-item:not(:last-child),
  .ant-menu-submenu-title {
    margin-bottom: 8px;
  }
`;
