'use client';

import { ThemeType } from '@/interfaces';
import { useTheme } from 'next-themes';
import React from 'react';

import { MoonSunSwitch } from './switch-button';

export const ThemePicker: React.FC = () => {
  const { setTheme, theme } = useTheme();

  const handleClickButton = (theme: ThemeType) => {
    setTheme(theme);
  };

  return (
    <MoonSunSwitch
      isMoonActive={theme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
