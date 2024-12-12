import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

type PatientNameFieldProps = {
  name: string;
};
export const PatientNameField: React.FC<PatientNameFieldProps> = ({ name }) => {
  const form = useFormContext();
  return (
    <div className='flex space-x-2'>
      <Input
        className='border-0 border-b rounded-none shadow-none placeholder:text-grayscale-textIcon-caption'
        placeholder='Imię'
        onChange={(e) => form.setValue(`${name}.firstName`, e.target.value)}
      />
      <Input
        className='border-0 border-b rounded-none shadow-none placeholder:text-grayscale-textIcon-caption'
        placeholder={form.watch('patientName.lastName') || 'Nazwisko'}
        onChange={(e) => form.setValue(`${name}.lastName`, e.target.value)}
      />
    </div>
  );
};
