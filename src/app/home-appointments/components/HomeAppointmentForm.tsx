'use client';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodError } from 'zod';

import { Form } from '@/components/ui/form';

import { Fragment, useState } from 'react';
import { PatientForm } from './form-patient-section/PatientSectionForm';
import { AppointmentForm } from './form-appointment-section/AppointmentSectionForm';
import { FormMenu } from './form-menu-section/FormMenu';
import { FormSchema } from '@/app/types/schemas';
import { useForm } from 'react-hook-form';
import { ChevronRight } from 'lucide-react';

export const HomeAppointmentForm = () => {
  const [patientNumber, setPatientNumber] = useState<number>(1);
  const numberOfPatients = Array.from(
    { length: patientNumber },
    (_, index) => index + 1
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    try {
      FormSchema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        error.issues.forEach((issue) => {
          //request design for handling errors in UI
          console.log(issue);
        });
      }
    }
  };
  return (
    <Fragment>
      <div className='flex flex-col flex-1 bg-base-white rounded-lg p-6'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
              <AppointmentForm />
            </div>
            {numberOfPatients.map((patient) => (
              <div key={patient} className='flex flex-col '>
                <PatientForm patientNumber={patient} />
              </div>
            ))}
            <div className='flex flex-col space-y-6'>
              <Button
                disabled={patientNumber === 6}
                variant='outline'
                className='w-full text-primary-background-default border-primary-background-default'
                onClick={() => {
                  console.log('form values', form.getValues('patient'));
                  setPatientNumber((previousNumber) => previousNumber + 1);
                }}>
                Dodaj pacjenta
              </Button>
              <Button
                type='submit'
                className='w-full bg-primary-background-default'>
                Dalej <ChevronRight />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div>
        <FormMenu numberOfPatients={numberOfPatients} />
      </div>
    </Fragment>
  );
};
