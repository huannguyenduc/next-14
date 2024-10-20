'use client';

import { BaseTable } from '@/components/common/base-table';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { useTranslations } from 'next-intl';
import React from 'react';

import * as S from './index.style';
import useUsers from './index.utils';

const Users: React.FC = () => {
  const t = useTranslations('admin');
  const { loading, params, options, columns, tableData, handleParamsChange, handleTableChange } =
    useUsers();

  return (
    <S.Users>
      <S.UsersTablesWrapper>
        <S.UsersCard id="basic-table" title={t('users.title')} padding="1.25rem 1.25rem 0">
          <S.UsersHeader>
            <S.UsersActions>
              <S.UsersSelect
                options={options}
                value={params.filterUser}
                onChange={(option) => handleParamsChange('filterUser', option)}
              />
              <S.UsersInput
                prefix={<SearchOutlined style={{ fontSize: '20px' }} />}
                placeholder={t('users.search')}
                onChange={debounce((e) => handleParamsChange('search', e.target.value), 300)}
              />
            </S.UsersActions>

            <S.UsersButton type={'primary'}>{t('users.export')}</S.UsersButton>
          </S.UsersHeader>

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
        </S.UsersCard>
      </S.UsersTablesWrapper>
    </S.Users>
  );
};

export default Users;
