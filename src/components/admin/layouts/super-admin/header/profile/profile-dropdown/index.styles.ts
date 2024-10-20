import { FONT_WEIGHT } from '@/constants';
import { media } from '@/utils';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { HeaderActionWrapper } from '../../index.styles';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;

  @media only screen and (${media('md')}) {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (${media('md')}) {
    color: ${({ theme }) => theme.textMainColor};
  }
`;

export const UserName = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.semibold};
`;
