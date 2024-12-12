'use client';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const path = usePathname().split('/').slice(1).join('/');
  const pathName = mapPathToName(path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${path}`}>{pathName}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Umawianie wizyty</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
const mapPathToName = (path: string) => {
  switch (path) {
    case 'online-appointments':
      return 'Wizyty online';
    case 'home-appointments':
      return 'Wizyty domowe';
    case 'appointments':
      return 'Wizyty';
    case 'stationary-appointments':
      return 'Wizyty stacjonarne';
    case 'second-opinion':
      return 'Druga opinia';
    default:
      return 'Strona główna';
  }
};
