'use client';

import { BaseAvatar } from '@/components/common/base-avatar';
import { Doctor } from '@/interfaces';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import * as S from './index.styles';

interface ProfileInfoProps {
  profileData: Doctor | null;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileData }) => {
  const [fullness] = useState(90);

  const t = useTranslations();

  return profileData ? (
    <S.Wrapper>
      <S.ImgWrapper>
        <BaseAvatar shape="circle" src={profileData?.avatar} alt="Profile" />
      </S.ImgWrapper>
      <S.Title>{`${profileData?.first_name} ${profileData?.last_name}`}</S.Title>
      <S.Subtitle>{profileData?.username}</S.Subtitle>
      <S.FullnessWrapper>
        <S.FullnessLine width={fullness}>{fullness}%</S.FullnessLine>
      </S.FullnessWrapper>
      <S.Text>desc</S.Text>
    </S.Wrapper>
  ) : null;
};
