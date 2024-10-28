import { BaseButton } from '@/components/common/base-button';
import { BaseCard } from '@/components/common/base-card';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect } from '@/components/common/selects/base-select';
import styled from 'styled-components';

export const Doctors = styled.div``;

export const DoctorsTablesWrapper = styled.div``;

export const DoctorsCard = styled(BaseCard)``;

export const DoctorsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const DoctorsActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const DoctorsButton = styled(BaseButton)``;

export const DoctorsInput = styled(BaseInput)``;

export const DoctorsSelect = styled(BaseSelect)`
  min-width: 200px;
`;
