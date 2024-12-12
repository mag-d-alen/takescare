import Link from 'next/link';
import {
  SidebarContent,
  SidebarProvider,
  SidebarMenuItem,
  Sidebar,
} from '@/components/ui/sidebar';
import { CustomCollapsible } from '@/components/CustomCollapsible';
import { Separator } from '@/components/ui/separator';
import { mockAppointmentField } from '@/mocks/mockAppointmentFields';
import { FormMenuSection } from './FormMenuSection';

type FormMenuProps = {
  numberOfPatients: number[];
};
export const FormMenu: React.FC<FormMenuProps> = ({ numberOfPatients }) => {
  return (
    <SidebarProvider defaultOpen className='flex flex-col '>
      <Sidebar
        variant='inset'
        side='right'
        className=' shadow-none mt-32 mr-24 scroll-mt-32 border-none '>
        <SidebarContent className=' bg-base-white rounded-lg p-6'>
          <CustomCollapsible title='Przejdź do'>
            <Separator />
            <CustomCollapsible title='Wizyta'>
              <Separator />
              {mockAppointmentField.appointment.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  className='scroll-mt-32 list-none marker:none'>
                  <Link href={`#${item.key}`} className=''>
                    {item.label}
                  </Link>
                </SidebarMenuItem>
              ))}
            </CustomCollapsible>
            {numberOfPatients.map((patientIndex: number) => (
              <FormMenuSection key={patientIndex} patientIndex={patientIndex} />
            ))}
          </CustomCollapsible>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
