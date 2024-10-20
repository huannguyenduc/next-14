import { BaseButton } from '@/components/common/base-button';
import { BaseCard } from '@/components/common/base-card';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect } from '@/components/common/selects/base-select';
import styled from 'styled-components';

export const Members = styled.div``;

export const MembersCard = styled(BaseCard)``;

export const MembersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const MembersActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const MembersButton = styled(BaseButton)``;

export const MembersInput = styled(BaseInput)``;

export const MembersSelect = styled(BaseSelect)`
  min-width: 200px;
`;
