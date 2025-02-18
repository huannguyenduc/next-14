import { media } from '@/utils';
import styled from 'styled-components';

import { BaseSpace } from '../../base-space';
import { BaseInput } from '../base-input';

export const SearchInput = styled(BaseInput.Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.54875rem;
    box-shadow: none;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    background-color: ${({ theme }) => theme.backgroundColorBase};

    @media only screen and (${media('md')}) {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  .ant-input-search-button,
  .ant-input-search-button:hover {
    &.ant-btn {
      font-weight: ${({ theme }) => theme.fontWeights.semibold};

      .anticon {
        color: ${({ theme }) => theme.primary};
      }
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: 1px solid ${({ theme }) => theme.borderBase};
    color: ${({ theme }) => theme.primary};
  }
`;

export const Space = styled(BaseSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
