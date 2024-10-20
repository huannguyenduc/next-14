import { Locale } from 'antd/lib/locale';
import en_US from 'antd/locale/en_US';
import vi_VN from 'antd/locale/vi_VN';

export const languages = {
  'vi-VN': {
    name: 'Vietnamese',
    flag: '🇻🇳',
    unicode: '1f1fb-1f1f3',
    antd: vi_VN,
  },
  'en-US': {
    name: 'English',
    flag: '🇺🇸',
    unicode: '1f1fa-1f1f8',
    antd: en_US,
  },
};

export const MatchLanguage = (locale: string) => {
  return Object.keys(languages).includes(locale);
};

export type ILanguage = {
  [K in keyof typeof languages]: {
    name: string;
    flag: string;
    unicode: string;
    antd: Locale;
  };
};

export const defaultLocale: keyof typeof languages = 'en-US';
