'use client';

import { ProfileInfo } from '@/components/admin/doctor/layout/profile-info';
import { ProfileNav } from '@/components/admin/doctor/layout/profile-nav';
import { BaseCard } from '@/components/common/base-card';
import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import { Doctor } from '@/interfaces';
import React from 'react';
import styled from 'styled-components';

const ProfileCard = styled(BaseCard)`
  height: unset;
`;

export default function DoctorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const testUser: Doctor = {
    id: 1,
    phone: '0123456789',
    first_name: 'John',
    last_name: 'Doe',
    avatar: 'https://lightence-assets.s3.amazonaws.com/avatars/avatar5.webp',
    bank_acc: '1234567890',
    hospital_id: 1,
    specialization: 'Cardiology',
    qualification: 'MD',
    username: 'johndoe',
    email: 'john.doe@example.com',
    password: 'hashedpassword',
    address: '123 Main St, City, Country',
    status: 'active',
  };
  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} md={24} xl={8}>
          <ProfileCard>
            <BaseRow gutter={[30, 30]}>
              <BaseCol xs={24} md={12} xl={24}>
                <ProfileInfo profileData={testUser} />
              </BaseCol>

              <BaseCol xs={24} md={12} xl={24}>
                <ProfileNav />
              </BaseCol>
            </BaseRow>
          </ProfileCard>
        </BaseCol>

        <BaseCol xs={24} md={24} xl={16}>
          {children}
        </BaseCol>
      </BaseRow>
    </>
  );
}
