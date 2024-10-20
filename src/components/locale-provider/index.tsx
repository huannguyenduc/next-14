import { defaultLocale, languages } from '@/utils/locale';
import { ConfigProvider } from 'antd';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';

export type ProviderProps = PropsWithChildren<{
  locale: string;
  messages: AbstractIntlMessages;
}>;

const LocaleProvider = ({ children, locale, messages }: ProviderProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ConfigProvider locale={(languages as any)[(locale as any) ?? defaultLocale].antd}>
        {children}
      </ConfigProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleProvider;
