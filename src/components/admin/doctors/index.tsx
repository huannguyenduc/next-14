'use client';

import { BaseTable } from '@/components/common/base-table';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react';

import * as S from './index.style';
import useDoctors from './index.utils';

const Doctors: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const { loading, columns, tableData, handleParamsChange, handleTableChange } = useDoctors();

  return (
    <S.Doctors>
      <S.DoctorsTablesWrapper>
        <S.DoctorsCard
          id="basic-table"
          title={t('admin.doctors.title')}
          padding="1.25rem 1.25rem 0"
        >
          <S.DoctorsHeader>
            <S.DoctorsActions>
              <S.DoctorsInput
                prefix={<SearchOutlined style={{ fontSize: '20px' }} />}
                placeholder={t('admin.doctors.search')}
                onChange={debounce((e) => handleParamsChange('search', e.target.value), 300)}
              />
            </S.DoctorsActions>

            <S.DoctorsButton
              type={'primary'}
              onClick={() => router.push('/admin/doctors/requests')}
            >
              {t('common.requests')}
            </S.DoctorsButton>
          </S.DoctorsHeader>

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
        </S.DoctorsCard>
      </S.DoctorsTablesWrapper>
    </S.Doctors>
  );
};

export default Doctors;
