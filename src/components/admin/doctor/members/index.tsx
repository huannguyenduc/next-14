'use client';

import AddModal from '@/components/admin/doctor/add-modal';
import { BaseButton } from '@/components/common/base-button';
import { BaseTable } from '@/components/common/base-table';
import { useTranslations } from 'next-intl';
import React from 'react';

import * as S from './index.style';
import useMembers from './index.utils';

const Members: React.FC = () => {
  const t = useTranslations();
  const { loading, columns, tableData, addModalOpen, setAddModalOpen, handleTableChange } =
    useMembers();

  return (
    <S.Members>
      <S.MembersCard
        id="basic-table"
        title={t('admin.doctor.profile.members.title')}
        extra={
          <BaseButton size="small" severity="info" onClick={() => setAddModalOpen(true)}>
            {t('common.add')}
          </BaseButton>
        }
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
      <AddModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={() => {}}
        loading={false}
      />
    </S.Members>
  );
};

export default Members;
