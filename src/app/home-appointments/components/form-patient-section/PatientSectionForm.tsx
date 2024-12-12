import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { mockAppointmentField } from '@/mocks/mockAppointmentFields';
import { FormFieldContainer } from '../FormFieldContainer';
import {
  PatientNameField,
  PatientAddressField,
  PatientAgeField,
  PatientIdField,
  PatientSymptomsField,
} from './form-fields';

type PatientFormProps = {
  patientNumber: number;
};
export const PatientForm: React.FC<PatientFormProps> = ({ patientNumber }) => {
  const form = useFormContext();
  const [hasAppointmentAddress, setHasAppointmentAddress] =
    useState<boolean>(false);
  return (
    <div className='flex flex-col space-y-6'>
      <FormLabel className='mx-2 font-sans leading-10 font-light text-lg'>
        Pacjent
      </FormLabel>
      {mockAppointmentField.patient.map((patientField) => (
        <FormField
          control={form.control}
          name={`${patientNumber}.${patientField.key}`}
          key={patientField.key}
          render={({ field }) => (
            <div>
              {patientField.key === 'patientAge' && (
                <FormFieldContainer
                  label={patientField.label}
                  fieldId={`${patientNumber}.${patientField.key}`}>
                  <PatientAgeField
                    placeholder={patientField.placeholder!}
                    patientNumber={patientNumber}
                    field={field}
                  />
                </FormFieldContainer>
              )}
              {patientField.key === 'patientName' && (
                <FormFieldContainer
                  label={patientField.label}
                  fieldId={`${patientNumber}.${patientField.key}`}>
                  <PatientNameField name={field.name} />
                </FormFieldContainer>
              )}
              {patientField.key === 'patientSymptoms' && (
                <FormFieldContainer
                  fieldId={`${patientNumber}.${patientField}`}
                  label={patientField.label}>
                  <PatientSymptomsField
                    options={patientField.options ?? []}
                    onChange={field.onChange}
                    name={field.name}
                    placeholder={patientField.placeholder}
                  />
                </FormFieldContainer>
              )}
              {patientField.key === 'patientId' && (
                <FormFieldContainer
                  label={patientField.label}
                  fieldId={`${patientNumber}.${patientField.key}`}>
                  <PatientIdField
                    name={`${patientNumber}.${patientField.key}`}
                    placeholder={patientField.placeholder ?? undefined}
                  />
                </FormFieldContainer>
              )}
              {patientField.key === 'patientAddress' && patientNumber === 1 && (
                <div>
                  {' '}
                  <FormFieldContainer
                    label={patientField.label}
                    fieldId={`${patientNumber}.${patientField.key}`}>
                    <PatientAddressField
                      name={field.name}
                      options={patientField.country!.options}
                    />
                  </FormFieldContainer>
                  <div className='flex justify-start space-x-2 mb-6'>
                    <Checkbox
                      id={'has-appointment-address'}
                      checked={hasAppointmentAddress}
                      onCheckedChange={() =>
                        setHasAppointmentAddress(!hasAppointmentAddress)
                      }
                    />
                    <label
                      htmlFor='has-appointment-address'
                      className='flex justify-start text-xs font-medium text-grayscale-textIcon-caption'>
                      Wizyta ma się odbyć na inny adres
                    </label>
                  </div>
                </div>
              )}
              {hasAppointmentAddress && patientField.key === 'visitAddress' && (
                <PatientAddressField
                  name={`${patientNumber}.${patientField.key}`}
                  options={patientField.country!.options}
                />
              )}
            </div>
          )}
        />
      ))}
    </div>
  );
};
