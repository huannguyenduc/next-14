import { media } from '@/utils';
import VerificationInput from 'react-verification-input';
import styled from 'styled-components';

export const CodeInput = styled(VerificationInput)`
  display: flex;
  gap: 0.625rem;

  .character {
    line-height: 5rem;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.textMain};
    border: 3px solid ${({ theme }) => theme.lightgrey};
    border-radius: ${({ theme }) => theme.borderRadius.xxs};
    width: 3.4375rem;
    height: 5rem;
  }

  .character--inactive {
    border: 3px solid ${({ theme }) => theme.lightgrey};
  }

  .character--selected {
    border: 3px solid ${({ theme }) => theme.primary};
  }

  @media only screen and (${media('xs')}) {
    gap: 0.4375rem;
    .character {
      width: 2.5625rem;
      height: 3.75rem;
    }
  }

  @media only screen and (${media('md')}) {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }

  @media only screen and (${media('xl')}) {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }
`;
