import styled from 'styled-components';

import { BaseInput } from '../base-input';

export const InputPassword = styled(BaseInput.Password)`
  .ant-input-password-icon.anticon {
    color: ${({ theme }) => theme.disabled};
    &:hover {
      color: ${({ theme }) => theme.textMain};
    }
  }
`;
