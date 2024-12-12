import React from 'react';
import Link from 'next/link';
import { mockAppointmentField } from '@/mocks/mockAppointmentFields';
import { convertToRomanNumerals } from '@/lib/utils';
import { CustomCollapsible } from '@/components/CustomCollapsible';
import { Separator } from '@/components/ui/separator';
import { SidebarMenuItem } from '@/components/ui/sidebar';

export const FormMenuSection = ({ patientIndex }: { patientIndex: number }) => {
  const linkButtons =
    patientIndex > 1
      ? mockAppointmentField.patient.filter(
          (item) =>
            item.label !== 'Dane adresowe do wizyty' &&
            item.label !== 'Dane adresowe'
        )
      : mockAppointmentField.patient;
  return (
    <CustomCollapsible
      title={`Pacjent ${convertToRomanNumerals(patientIndex)}`}>
      <Separator />
      {linkButtons.map((item) => (
        <SidebarMenuItem
          key={item.label}
          className='scroll-mt-40 list-none marker:none'>
          <Link href={`#${patientIndex}.${item.key}`} className='font-medium'>
            {item.label}
          </Link>
        </SidebarMenuItem>
      ))}
    </CustomCollapsible>
  );
};
