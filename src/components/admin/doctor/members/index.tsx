'use client';

import { BaseTable } from '@/components/common/base-table';
import { useTranslations } from 'next-intl';
import React from 'react';

import * as S from './index.style';
import useMembers from './index.utils';

const Members: React.FC = () => {
  const t = useTranslations();
  const { loading, columns, tableData, handleTableChange } = useMembers();

  return (
    <S.Members>
      <S.MembersCard
        id="basic-table"
        title={t('admin.doctor.profile.members.title')}
        padding="1.25rem 1.25rem 1rem"
      >
        <BaseTable
          columns={columns}
          rowKey={'id'}
          dataSource={tableData.data}
          pagination={tableData.pagination}
          loading={loading}
          onChange={handleTableChange}
          scroll={{ x: 800 }}
          bordered
        />
      </S.MembersCard>
    </S.Members>
  );
};

export default Members;
