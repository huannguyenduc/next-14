import { BaseButton } from '@/components/common/base-button';
import { BaseCard } from '@/components/common/base-card';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect } from '@/components/common/selects/base-select';
import styled from 'styled-components';

export const Users = styled.div``;

export const UsersTablesWrapper = styled.div`
  margin-top: 1.875rem;
`;

export const UsersCard = styled(BaseCard)`
  margin-bottom: 2rem;
`;

export const UsersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const UsersActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UsersButton = styled(BaseButton)``;

export const UsersInput = styled(BaseInput)``;

export const UsersSelect = styled(BaseSelect)`
  min-width: 200px;
`;
