'use-client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

type PatientSymptomsFieldProps = {
  name: string;
  onChange: () => void;
  placeholder?: string;
  options: { value: string; label: string }[];
};
export const PatientSymptomsField: React.FC<PatientSymptomsFieldProps> = ({
  onChange,
  name,
  placeholder,
  options,
}) => {
  const form = useFormContext();
  const fieldValues = form.watch(name);
  const handleCheckItem = (chosenValue: string) => {
    if (!fieldValues?.length) return form.setValue(name, [chosenValue]);
    if (fieldValues?.includes(chosenValue)) {
      const newValues = fieldValues.filter(
        (existingValue: string) => existingValue !== chosenValue
      );
      return form.setValue(name, newValues);
    }
    form.setValue(name, [...fieldValues, chosenValue]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='w-full border-0 rounded-none border-b justify-between text-grayscale-textIcon-caption'>
          {placeholder}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Zaznacz wszystkie</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option: { value: string; label: string }) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            onChange={onChange}
            checked={fieldValues?.includes(option.value)}
            onCheckedChange={() => handleCheckItem(option.value)}>
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
