'use client';
import { Fragment, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mockAppointmentField } from '@/mocks/mockAppointmentFields';
import { SearchSelect } from '../SearchSelect';
import { FormFieldContainer } from '../FormFieldContainer';
import { AppointmentDateField, AppointmentTimeField } from './form-fields';

export const AppointmentForm: React.FC = () => {
  const form = useFormContext();
  const [hourRange, setHourRange] = useState<boolean>(false);

  return (
    <Fragment>
      <FormLabel className='mx-2 mb-6 p-0 font-sans leading-10 font-light text-lg'>
        Wizyta
      </FormLabel>
      {mockAppointmentField.appointment.map((appointmentField) => (
        <FormField
          control={form.control}
          name={appointmentField.key}
          key={appointmentField.key}
          render={({ field }) => (
            <div>
              {appointmentField.options &&
                appointmentField.options.length > 0 && (
                  <FormFieldContainer
                    label={appointmentField.label}
                    fieldId={appointmentField.key}>
                    <SearchSelect
                      placeholder={appointmentField.placeholder || ''}
                      setFieldValue={(value) =>
                        form.setValue(appointmentField.key, value)
                      }
                      value={field.value}
                      options={appointmentField.options}
                      onChange={field.onChange}
                    />
                  </FormFieldContainer>
                )}
              {appointmentField.key === 'appointmentNumber' && (
                <FormFieldContainer
                  label={appointmentField.label}
                  fieldId={appointmentField.key}>
                  <Input
                    className='border-0 border-b rounded-none shadow-none  placeholder:text-grayscale-textIcon-caption'
                    type={'number'}
                    {...field}
                    placeholder={appointmentField.placeholder}
                  />
                </FormFieldContainer>
              )}
              {appointmentField.key === 'additionalInformation' && (
                <FormFieldContainer
                  label={appointmentField.label}
                  fieldId={appointmentField.key}>
                  <Textarea
                    className='bg-grayscale-background-subtle border-0 border-b rounded-lg shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
                    {...field}
                    placeholder={appointmentField.placeholder}
                  />
                </FormFieldContainer>
              )}
              {appointmentField.key === 'appointmentTime' && hourRange && (
                <FormFieldContainer
                  fieldId={appointmentField.key}
                  label={appointmentField.label}>
                  <AppointmentTimeField onChange={field.onChange} />
                </FormFieldContainer>
              )}
              {appointmentField.key === 'appointmentDate' && (
                <FormFieldContainer
                  fieldId={appointmentField.key}
                  label={appointmentField.label}>
                  <AppointmentDateField
                    onChange={field.onChange}
                    saveValue={(value) =>
                      form.setValue(appointmentField.key, value)
                    }
                    value={field.value}
                    placeholder={appointmentField.placeholder!}
                    hourRange={hourRange}
                    setHourRange={setHourRange}
                  />
                </FormFieldContainer>
              )}
            </div>
          )}
        />
      ))}
    </Fragment>
  );
};
