import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const RemoveTagWrapper = styled.span`
  padding-left: 0.3125rem;
  display: flex;
  align-items: center;
  padding-top: 1px;
`;

export const RemoveTagIcon = styled(CloseOutlined)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  cursor: pointer;
`;

export const TagWrapper = styled.span`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem 0.625rem;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
