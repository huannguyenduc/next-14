import { FONT_SIZE } from '@/constants';
import { Menu as AntMenu } from 'antd';
import styled from 'styled-components';

export const Menu = styled(AntMenu)`
  &.ant-menu .ant-menu-item-icon {
    font-size: ${FONT_SIZE.xl};
    width: 1.25rem;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${FONT_SIZE.xs};
    border-radius: 0;
  }

  .ant-menu-item {
    fill: currentColor;
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
`;
