import { BreadcrumbProps } from 'antd/lib/breadcrumb';
import { ItemType } from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';

import * as S from './index.styles';

interface BaseBreadcrumbProps extends BreadcrumbProps {
  items: Array<{
    title: React.ReactNode;
    href?: string;
  }>;
}

export const BaseBreadcrumb: React.FC<BaseBreadcrumbProps> = ({ items, ...props }) => {
  const itemRender = (item: ItemType, _: unknown, items: ItemType[]) => {
    const last = items.indexOf(item) === items.length - 1;
    return last ? (
      <S.CurrentItem>{item.title}</S.CurrentItem>
    ) : (
      <S.LinkItem href={item.href || '#'}>{item.title}</S.LinkItem>
    );
  };

  return <S.Breadcrumb items={items} itemRender={itemRender} {...props} />;
};
