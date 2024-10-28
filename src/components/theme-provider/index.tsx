'use client';

import { ThemeType } from '@/interfaces';
import useAppState from '@/stores/app';
import { getThemeConfig } from '@/styles/theme-config';
import { themeObject } from '@/styles/themes/theme-variables';
import { LoadingOutlined } from '@ant-design/icons';
import { ConfigProvider, App as FeedbackProvider, Spin } from 'antd';
import React, { useRef } from 'react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.05)',
};

export const ThemesProvider = (props: PropsWithChildren) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme } = useAppState();
  const currentTheme = themeObject[theme as ThemeType];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={styles}>
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      </div>
    );
  }

  return <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>;
};

export const WithThemes = ({ children }: PropsWithChildren) => {
  const { theme } = useAppState();
  const root = useRef(document.querySelector(':root'));
  const currentTheme = themeObject[theme as ThemeType];
  const themeConfig = React.useMemo(() => getThemeConfig(currentTheme), [currentTheme]);

  useEffect(() => {
    const html = root.current;
    if (html) {
      html.setAttribute('data-no-transition', '');
      html.setAttribute('data-theme', theme);
      // remove transition after layout update
      requestAnimationFrame(() => {
        html.removeAttribute('data-no-transition');
      });
    }
  }, [theme]);

  return (
    <ConfigProvider theme={themeConfig}>
      <FeedbackProvider>{children}</FeedbackProvider>
    </ConfigProvider>
  );
};
