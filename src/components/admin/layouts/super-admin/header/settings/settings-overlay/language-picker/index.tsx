import { BaseRadio } from '@/components/common/base-radio';
import { BaseSpace } from '@/components/common/base-space';
import { Locale, defaultLocale } from '@/config';
import { setUserLocale } from '@/services/locales';
import { cookies } from '@/utils';
import React, { useTransition } from 'react';

import { RadioBtn } from '../settings-overlay/index.styles';

export const LanguagePicker: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const locale = cookies.get('NEXT_LOCALE') || defaultLocale;

  const changeLanguage = (lang: string) => {
    startTransition(() => {
      setUserLocale(lang as Locale);
    });
  };

  return (
    <BaseRadio.Group
      defaultValue={locale}
      disabled={isPending}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <BaseSpace direction="vertical">
        <RadioBtn value="en-US">
          <BaseSpace align="center">En</BaseSpace>
        </RadioBtn>
        <RadioBtn value="vi-VN">
          <BaseSpace align="center">Vi</BaseSpace>
        </RadioBtn>
      </BaseSpace>
    </BaseRadio.Group>
  );
};
