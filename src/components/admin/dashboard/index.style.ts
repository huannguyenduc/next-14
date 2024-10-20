import { BaseCard } from '@/components/common/base-card';
import { FONT_SIZE } from '@/constants';
import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled(BaseCard)`
  width: 100%;
`;

export const WelcomeText = styled.p`
  font-size: ${FONT_SIZE.md};
`;
