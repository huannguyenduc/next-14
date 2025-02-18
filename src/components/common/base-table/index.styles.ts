import { Table as AntdTable } from 'antd';
import styled from 'styled-components';

export const Table = styled(AntdTable)`
  & thead .ant-table-cell {
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.25rem;

    & .anticon {
      color: ${({ theme }) => theme.primary};
    }
  }

  & tbody .ant-table-cell {
    color: ${({ theme }) => theme.textMain};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.25rem;
  }

  & tbody .ant-table-row-expand-icon {
    min-height: 1.25rem;
    min-width: 1.25rem;
    border-radius: 0.1875rem;
    margin-top: 0;
  }

  /* Override default antd selector */
  &
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not(
      [colspan]
    )::before {
    background-color: ${({ theme }) => theme.primary};
  }

  & .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next,
  .ant-select-selector,
  .ant-select-selection-search-input,
  .ant-select-selection-item,
  .ant-pagination-item {
    min-width: 2.0625rem;
    height: 2.0625rem !important;
    line-height: 2.0625rem !important;
    border-radius: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  & .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 0;
  }

  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  & .editable-row .ant-form-item-explain {
    position: absolute;
    top: 100%;
    font-size: 0.75rem;
  }

  .ant-table-column-sort {
    background-color: transparent;
  }

  .ant-pagination-item-container .ant-pagination-item-ellipsis {
    color: ${({ theme }) => theme.disabled};
  }

  .ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: ${({ theme }) => theme.disabled};
    }
  }

  .ant-pagination.ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: ${({ theme }) => theme.disabled};
    }
  }
` as typeof AntdTable;
