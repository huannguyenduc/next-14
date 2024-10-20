import styled, { css } from 'styled-components';

import { NotificationType } from '.';
import { BaseAvatar } from '../base-avatar';
import { BaseSpace } from '../base-space';
import { BaseTypography } from '../base-typography';

interface SpacewWrapperProps {
  type: NotificationType;
}

export const NotificationIcon = styled(BaseAvatar)``;

export const Title = styled(BaseTypography.Text)`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Description = styled(BaseTypography.Text)`
  font-size: 0.875rem;
`;

export const SpaceWrapper = styled(BaseSpace)<SpacewWrapperProps>`
  background-color: ${({ theme }) => theme.background};

  & ${Title}, span[role='img'] {
    ${(props) => {
      switch (props.type) {
        case 'error':
        case 'warning':
        case 'success':
          return css`
            color: ${({ theme }) => theme[props.type]};
          `;
        case 'info':
        case 'mention':
          return css`
            color: ${({ theme }) => theme.primary};
          `;
        default:
          return '';
      }
    }}
  }

  & span[role='img'] {
    font-size: 2rem;
  }
`;
