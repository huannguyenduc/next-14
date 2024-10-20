import VerifyEmailImage from '@/assets/images/auth/verify-email.webp';
import * as Auth from '@/components/auth/index.styles';
import { BaseImage } from '@/components/common/base-image';
import { BaseSpin } from '@/components/common/base-spin';
import { BaseForm } from '@/components/common/forms/base-form';
import { VerificationCodeInput } from '@/components/common/inputs/verification-code-input';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import * as S from './index.styles';

interface SecurityCodeFormProps {
  onBack?: () => void;
  onFinish?: () => void;
}

export const SecurityCodeForm: React.FC<SecurityCodeFormProps> = ({ onBack, onFinish }) => {
  const t = useTranslations();
  const router = useRouter();

  const navigateBack = useCallback(() => router.back(), [router]);
  const navigateForward = useCallback(() => router.push('/auth/new-password'), [router]);

  const [securityCode, setSecurityCode] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (securityCode.length === 6) {
      setLoading(true);
      // mutate here
      navigateForward();
    }
  }, [securityCode, navigateForward, onFinish]);

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" requiredMark="optional">
        <Auth.BackWrapper onClick={onBack || navigateBack}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <S.ContentWrapper>
          <S.ImageWrapper>
            <BaseImage src={VerifyEmailImage.src} alt="Not found" preview={false} />
          </S.ImageWrapper>
          <Auth.FormTitle>{t('security.title')}</Auth.FormTitle>
          <S.VerifyEmailDescription>{t('security.desc')}</S.VerifyEmailDescription>
          {isLoading ? (
            <BaseSpin />
          ) : (
            <VerificationCodeInput autoFocus onChange={setSecurityCode} />
          )}
          <Link href="/" target="_blank">
            <S.NoCodeText>{t('security.noCode')}</S.NoCodeText>
          </Link>
        </S.ContentWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
