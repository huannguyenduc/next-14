import { media } from '@/utils';
import { Steps as AntdSteps } from 'antd';
import styled from 'styled-components';

export const Steps = styled(AntdSteps)`
  font-size: unset;

  &
    .ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSizes.xs};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${({ theme }) => theme.textMain};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSizes.xs};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    border-color: ${({ theme }) => theme.disabled};

    & > .ant-steps-icon {
      color: ${({ theme }) => theme.disabled};
    }
  }

  .ant-steps-item-container {
    display: flex;
    align-items: baseline;
  }

  &.ant-steps-vertical {
    .ant-steps-item-container {
      align-items: flex-start;
    }
  }
  &.ant-steps-vertical.ant-steps-small {
    .ant-steps-item-container .ant-steps-item-tail {
      padding: 1.625rem 0 0.375rem;
    }
  }
  & .ant-steps-item {
    &:not(.ant-steps-item-process) {
      .ant-steps-item-description {
        color: ${({ theme }) => theme.subText};
      }
    }
    .ant-steps-item-subtitle {
      color: ${({ theme }) => theme.subText};
    }
  }
`;
