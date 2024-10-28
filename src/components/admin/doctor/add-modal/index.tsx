'use client';

import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { BaseRow } from '@/components/common/base-row';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseFormItem } from '@/components/common/forms/components/base-form-item';
import { BaseInput } from '@/components/common/inputs/base-input';
import { Flex } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

interface AddModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  loading: boolean;
}

const AddModal: React.FC<AddModalProps> = ({ open, onClose, onSubmit, loading }) => {
  const t = useTranslations();

  return (
    <BaseModal title="Add Doctor" open={open} closable={false} footer={null}>
      <BaseForm onFinish={onSubmit}>
        <BaseRow gutter={16}>
          <BaseCol span={12}>
            <BaseFormItem name="name" label="Name" rules={[{ required: true }]}>
              <BaseInput />
            </BaseFormItem>
          </BaseCol>
        </BaseRow>
        <Flex justify="center" gap={16}>
          <BaseButton onClick={onClose}>{t('common.cancel')}</BaseButton>
          <BaseButton type="primary" htmlType="submit" loading={loading}>
            {t('common.add')}
          </BaseButton>
        </Flex>
      </BaseForm>
    </BaseModal>
  );
};

export default AddModal;
