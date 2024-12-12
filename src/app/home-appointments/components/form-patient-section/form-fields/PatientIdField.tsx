import React from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFormContext } from 'react-hook-form';

type FieldProps = {
  name: string;
  placeholder?: string;
};
export const PatientIdField: React.FC<FieldProps> = ({ name, placeholder }) => {
  const form = useFormContext();
  return (
    <Tabs defaultValue='pesel'>
      <TabsList className='bg-primary-background-subtle flex space-x-4 '>
        <TabsTrigger className='w-1/2' value='pesel'>
          PESEL
        </TabsTrigger>
        <TabsTrigger className='w-1/2' value='passport'>
          Paszport
        </TabsTrigger>
      </TabsList>
      <TabsContent value='pesel'>
        <Input
          type='number'
          className='border-0 border-b rounded-none shadow-none placeholder:text-grayscale-textIcon-caption '
          onChange={(e) =>
            form.setValue(name, {
              type: 'pesel',
              idNumber: e.target.value,
            })
          }
          placeholder={form.watch(name) || `${placeholder} PESEL`}
        />
      </TabsContent>
      <TabsContent value='passport'>
        <Input
          className='border-0 border-b rounded-none shadow-none placeholder:text-grayscale-textIcon-caption'
          onChange={(e) =>
            form.setValue(name, {
              type: 'passport',
              idNumber: e.target.value,
            })
          }
          placeholder={
            form.watch('patientId.passport') || `${placeholder} paszportu`
          }
        />
      </TabsContent>
    </Tabs>
  );
};
