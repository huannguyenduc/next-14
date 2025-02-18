'use client';

import { BaseTable } from '@/components/common/base-table';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { useTranslations } from 'next-intl';
import React from 'react';

import * as S from '../index.style';
import useDoctors from './index.utils';

const DoctorRequests: React.FC = () => {
  const t = useTranslations();
  const { loading, columns, tableData, handleParamsChange, handleTableChange } = useDoctors();

  return (
    <S.Doctors>
      <S.DoctorsTablesWrapper>
        <S.DoctorsCard
          id="basic-table"
          title={t('admin.doctors.requestTitle')}
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

export default DoctorRequests;
