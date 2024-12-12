import React from 'react';
import { TimeRangeInput } from '@/components/TimeRangeInput';
import { useFormContext } from 'react-hook-form';

type AppointmentFormProps = {
  onChange: () => void;
};
export const AppointmentTimeField: React.FC<AppointmentFormProps> = ({
  onChange,
}) => {
  const form = useFormContext();
  return (
    <TimeRangeInput
      value={form.watch('appointmentTime') ?? { from: '', to: '' }}
      saveFields={({ from, to }: { from: string; to: string }) => {
        form.setValue('appointmentTime.from', from);
        form.setValue('appointmentTime.to', to);
      }}
      onChange={onChange}
      appointmentDate={form.watch('appointmentDate')}
      startHour={form.watch('appointmentTime.from')}
    />
  );
};
