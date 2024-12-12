import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/DatePicker';
import { peselRegex } from '@/app/types/schemas';

type PatientAgeFieldProps = {
  field: any;
  patientNumber: number;
  placeholder: string;
};
export const PatientAgeField: React.FC<PatientAgeFieldProps> = ({
  field,
  patientNumber,
  placeholder,
}) => {
  const form = useFormContext();
  const isAdult = moment(field.value).add(18, 'years').isSameOrBefore(moment());
  const identification = form.watch(`${patientNumber}.patientId`);
  const pesel =
    identification?.type === 'pesel' ? identification.idNumber : null;
  const [defaultBirthday, setDefaultBirthday] = useState<Date | undefined>();

  useEffect(() => {
    if (pesel && pesel.length === 11 && pesel.match(peselRegex)) {
      const yearPart = pesel.substring(0, 2);
      const monthPart = pesel.substring(2, 4);
      const dayPart = pesel.substring(4, 6);

      const defaultYear =
        Number(yearPart[0]) <= 2
          ? 2000 + Number(yearPart)
          : 1900 + Number(yearPart);

      setDefaultBirthday(
        new Date(defaultYear, Number(monthPart) - 1, Number(dayPart))
      );
    }
  }, [pesel]);

  return (
    <div>
      <DatePicker
        onChange={(date: Date | undefined) => {
          field.onChange();
          date && form.setValue(field.name, date);
        }}
        defaultValue={defaultBirthday ?? field.value}
        placeholder={placeholder}
        isDisabled={(date: Date) =>
          moment(date).isAfter(moment()) ||
          date < moment().subtract(100, 'years').toDate()
        }
      />

      {field.value && (
        <div className='flex space-x-4'>
          <Button
            className={`w-1/2 ${
              isAdult ? 'bg-navy-background-body' : 'bg-secondary text-primary'
            }`}>
            Dorosły
          </Button>
          <Button
            className={`w-1/2 ${
              !isAdult ? 'bg-navy-background-body' : 'bg-secondary text-primary'
            }`}>
            Dziecko
          </Button>
        </div>
      )}
    </div>
  );
};
