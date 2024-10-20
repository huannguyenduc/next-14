import LocaleProvider from '@/components/locale-provider';
import SWRProvider from '@/components/swr-provider';
import { ThemesProvider, WithThemes } from '@/components/theme-provider';
import GlobalStyle from '@/styles/theme-global';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';
import { Metadata } from 'next';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';
import 'typeface-montserrat';

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head />
      <body>
        <ThemesProvider>
          <AntdRegistry>
            <ThemesProvider>
              <GlobalStyle />
              <WithThemes>
                <LocaleProvider locale={locale} messages={messages}>
                  <SWRProvider>{children}</SWRProvider>
                </LocaleProvider>
              </WithThemes>
            </ThemesProvider>
          </AntdRegistry>
        </ThemesProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('site');
  const locale = await getLocale();
  const title = t('title');
  const description = t('desc');

  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      url: 'https://nextjs.org',
      siteName: title,
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale,
      type: 'website',
    },
  };
}
