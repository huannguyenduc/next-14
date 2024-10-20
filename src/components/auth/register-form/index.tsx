'use client';

import * as Auth from '@/components/auth/index.styles';
import { BaseForm } from '@/components/common/forms/base-form';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import * as S from './index.styles';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termOfUse: true,
};

export const RegisterForm: React.FC = () => {
  const t = useTranslations();

  const handleSubmit = (values: SignUpFormData) => {
    // handle submit action here
    console.log(values);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <S.Title>{t('auth.register')}</S.Title>
        <Auth.FormItem
          name="firstName"
          label={t('auth.firstName')}
          rules={[{ required: true, message: t('validate.required') }]}
        >
          <Auth.FormInput placeholder={t('auth.firstName')} />
        </Auth.FormItem>
        <Auth.FormItem
          name="lastName"
          label={t('auth.lastName')}
          rules={[{ required: true, message: t('validate.required') }]}
        >
          <Auth.FormInput placeholder={t('auth.lastName')} />
        </Auth.FormItem>
        <Auth.FormItem
          name="email"
          label={t('auth.email')}
          rules={[
            { required: true, message: t('validate.required') },
            {
              type: 'email',
              message: t('validate.email'),
            },
          ]}
        >
          <Auth.FormInput placeholder={t('auth.email')} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('auth.password')}
          name="password"
          rules={[{ required: true, message: t('validate.required') }]}
        >
          <Auth.FormInputPassword placeholder={t('auth.password')} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('auth.confirmPassword')}
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: t('validate.required') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('validate.match', { field: 'password' })));
              },
            }),
          ]}
        >
          <Auth.FormInputPassword placeholder={t('auth.confirmPassword')} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <Auth.Text>
                {t('auth.agree')}{' '}
                <Link href="/" target="_blank">
                  <Auth.LinkText>{t('auth.termOfUse')}</Auth.LinkText>
                </Link>{' '}
                {t('auth.and')}{' '}
                <Link href="/" target="_blank">
                  <Auth.LinkText>{t('auth.privacyOPolicy')}</Auth.LinkText>
                </Link>
              </Auth.Text>
            </Auth.FormCheckbox>
          </BaseForm.Item>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={true}>
            {t('auth.register')}
          </Auth.SubmitButton>
        </BaseForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('auth.alreadyHaveAccount')}{' '}
            <Link href="/auth/login">
              <Auth.LinkText>{t('auth.here')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
