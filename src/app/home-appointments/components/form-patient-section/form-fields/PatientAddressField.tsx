import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { SearchSelect } from '../../SearchSelect';

type FieldProps = {
  name: string;
  options: { label: string; value: string }[];
};
export const PatientAddressField: React.FC<FieldProps> = ({
  name,
  options,
}) => {
  const form = useFormContext();
  return (
    <div>
      <SearchSelect
        placeholder='Kraj'
        setFieldValue={(value) => form.setValue(`${name}.country}`, value)}
        onChange={() => {}}
        options={options}
        value={form.watch(`${name}.country}`)}
      />
      <Input
        className='border-0 border-b rounded-none shadow-none placeholder:text-grayscale-textIcon-caption'
        placeholder='Ulica'
        onChange={(e) => form.setValue(`${name}.street}`, e.target.value)}
      />
      <Input
        className='border-0 border-b rounded-none shadow-none placeholder:text-grayscale-textIcon-caption'
        placeholder='Number lokalu'
        onChange={(e) => form.setValue(`${name}.number}`, e.target.value)}
      />
    </div>
  );
};
