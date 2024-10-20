import { BurgerIcon } from '@/components/common/base-burger/BurgerIcon';
import { BaseCol } from '@/components/common/base-col';
import { BaseCollapse } from '@/components/common/base-collapse/base-collapse';
import { BaseLayout } from '@/components/common/base-layout';
import { LAYOUT } from '@/constants';
import { media } from '@/utils';
import styled, { css } from 'styled-components';

interface HeaderProps {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<HeaderProps>`
  line-height: 1.5;
  background: ${({ theme }) => theme.layoutHeaderBg};
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media only screen and (${media('md')}) {
    padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.xl}`};
    height: ${LAYOUT.desktop.headerHeight};

    ${(props) =>
      props.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn span[role='img'],
  .ant-badge {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(BaseCollapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.primary};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(BaseCol)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)<{ isCross: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: ${(props) => (props.isCross ? props.theme.textSecondary : props.theme.textMain)};
`;

export const SearchColumn = styled(BaseCol)`
  padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.xl}`};
`;

interface ProfileColumnInterface {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(BaseCol)<ProfileColumnInterface>`
  @media only screen and (${media('md')}) {
    ${(props) =>
      props.$isTwoColumnsLayout &&
      css`
        background-color: ${props.theme.siderBackground};
        padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.xl}`};
      `}
  }
`;
