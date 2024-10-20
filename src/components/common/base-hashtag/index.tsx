import React from 'react';
import { useTheme } from 'styled-components';

import * as S from './index.styles';

export interface IHashTag {
  id: string;
  title: string;
  bgColor: 'error' | 'success' | 'warning';
}

interface BaseHashTagProps {
  title: string;
  color?: string;
  bgColor?: 'error' | 'success' | 'warning' | 'primary';
  removeTag?: () => void;
}

export const BaseHashTag: React.FC<BaseHashTagProps> = ({
  title,
  color,
  bgColor,
  removeTag,
  ...otherProps
}) => {
  const theme = useTheme();
  const style = {
    color: color || theme.white,
    backgroundColor: bgColor ? theme[bgColor] : theme.orange,
  };
  return (
    <S.TagWrapper style={style} {...otherProps}>
      #{title}
      {!!removeTag && (
        <S.RemoveTagWrapper
          onClick={(e) => {
            removeTag();
            e.stopPropagation();
          }}
        >
          <S.RemoveTagIcon />
        </S.RemoveTagWrapper>
      )}
    </S.TagWrapper>
  );
};
