import { colorTypeFrom } from '@/utils';
import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';

export const Badge = styled(AntBadge)`
  .ant-badge-count {
    background: ${(props) => props.theme[colorTypeFrom(props.status)]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .ant-badge-count-sm {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
