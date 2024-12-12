import React from 'react';
import moment from 'moment';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/DatePicker';

type AppointmentDateFieldProps = {
  placeholder: string;
  value?: string;
  onChange: (value: Date | undefined) => void;
  saveValue: (value: Date) => void;
  hourRange: boolean;
  setHourRange: (value: boolean) => void;
};
export const AppointmentDateField: React.FC<AppointmentDateFieldProps> = ({
  value,
  onChange,
  saveValue,
  placeholder,
  setHourRange,
  hourRange,
}) => {
  return (
    <div>
      <DatePicker
        isDisabled={(date: Date) =>
          moment(date) > moment().add(3, 'days') ||
          moment(date) < moment().subtract(1, 'days').endOf('day')
        }
        onChange={(date: Date | undefined) => {
          if (date) {
            saveValue(date);
          }
          onChange(date);
        }}
        defaultValue={value ? new Date(value) : undefined}
        placeholder={placeholder!}
      />

      {value && (
        <div className=' flex items-center space-x-2 mt-6'>
          <Checkbox
            checked={hourRange}
            id={'hourRange'}
            onCheckedChange={() => setHourRange(!hourRange)}
          />
          <label
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='hourRange'>
            Wybierz konkretny przedział godzinowy
          </label>
        </div>
      )}
    </div>
  );
};
