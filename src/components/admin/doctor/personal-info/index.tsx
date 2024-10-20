'use client';

import { BaseCard } from '@/components/common/base-card';
import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import { BaseButtonsForm } from '@/components/common/forms/base-buttons-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { useFeedback } from '@/hooks/common/useFeedback';
import { Doctor } from '@/interfaces';
import { useTranslations } from 'next-intl';
import React, { useCallback, useMemo, useState } from 'react';

interface PersonalInfoProps {}

interface PersonalInfoFormValues {
  firstName?: string;
  lastName: string;
  address?: string;
}

const initialPersonalInfoValues: PersonalInfoFormValues = {
  firstName: '',
  lastName: '',
  address: '',
};

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  const t = useTranslations();
  const { notification } = useFeedback();
  const [isFieldsChanged, setFieldsChanged] = useState<boolean>(false);
  const user: Doctor | any = {};

  const userFormValues = useMemo(
    () =>
      user
        ? {
            firstName: user?.first_name,
            lastName: user?.last_name,
            address: user?.address,
          }
        : initialPersonalInfoValues,
    [user]
  );

  const [form] = BaseButtonsForm.useForm();

  const onFinish = useCallback(
    (values: PersonalInfoFormValues) => {
      // todo dispatch an action here
      notification.success({ message: t('common.success') });
      console.log('🚀 ~ onFinish ~ values:', values);
    },
    [notification, t]
  );

  return (
    <BaseCard>
      <BaseButtonsForm
        form={form}
        name="info"
        loading={false}
        initialValues={userFormValues}
        isFieldsChanged={isFieldsChanged}
        setFieldsChanged={setFieldsChanged}
        onFieldsChange={() => setFieldsChanged(true)}
        onFinish={onFinish}
      >
        <BaseRow gutter={{ xs: 10, md: 15, xl: 30 }}>
          <BaseCol span={24}>
            <BaseButtonsForm.Item>
              <BaseButtonsForm.Title>
                {t('admin.doctor.profile.personalInfo.title')}
              </BaseButtonsForm.Title>
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <BaseButtonsForm.Item name="firstName" label={t('common.firstName')}>
              <BaseInput />
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <BaseButtonsForm.Item name="firstName" label={t('common.lastName')}>
              <BaseInput />
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol span={24}>
            <BaseButtonsForm.Item>
              <BaseButtonsForm.Title>
                {t('admin.doctor.profile.personalInfo.contactInfo')}
              </BaseButtonsForm.Title>
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <BaseButtonsForm.Item name="address" label={t('common.address')}>
              <BaseInput />
            </BaseButtonsForm.Item>
          </BaseCol>
        </BaseRow>
      </BaseButtonsForm>
    </BaseCard>
  );
};

export default PersonalInfo;
