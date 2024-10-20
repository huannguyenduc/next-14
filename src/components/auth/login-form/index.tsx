'use client';

import * as Auth from '@/components/auth/index.styles';
import { BaseForm } from '@/components/common/forms/base-form';
import { RouterPath } from '@/constants';
import { useLogin } from '@/hooks/features/use-auth';
import { cookies } from '@/utils/cookie';
import { Form } from 'antd';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import * as S from './index.styles';

interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const t = useTranslations();
  const [form] = Form.useForm();
  const { push } = useRouter();

  const { trigger, isMutating } = useLogin();

  const handleSubmit = (values: LoginFormData) => {
    trigger(values, {
      onSuccess: (res) => {
        cookies.set('access_token', res?.data?.accessToken);
        push(RouterPath.DASHBOARD);
      },
    });
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <Auth.FormTitle>{t('auth.login')}</Auth.FormTitle>
        <S.LoginDescription>{t('auth.loginDesc')}</S.LoginDescription>
        <Auth.FormItem
          name="email"
          label={t('auth.email')}
          rules={[
            { required: true, message: t('validate.required') },
            {
              type: 'email',
              message: t('validate.email'),
            },
            {
              max: 64,
              message: t('validate.max', { length: 64 }),
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
        <Auth.ActionsWrapper style={{ justifyContent: 'end' }}>
          <Link href="/auth/forgot-password">
            <S.ForgotPasswordText>{t('auth.forgotPass')}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isMutating}>
            {t('auth.login')}
          </Auth.SubmitButton>
        </BaseForm.Item>

        <Auth.FooterWrapper>
          <Auth.Text>
            {t('auth.noAccount')}{' '}
            <Link href="/auth/register">
              <Auth.LinkText>{t('auth.here')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
