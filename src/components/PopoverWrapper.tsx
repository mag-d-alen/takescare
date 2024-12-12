import React from 'react';
import { PopoverContent, PopoverTrigger, Popover } from './ui/popover';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

type PopoverProps = {
  children: React.ReactNode;
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  open: boolean;
  openPopup: () => void;
};

export const PopoverWrapper: React.FC<PopoverProps> = ({
  children,
  placeholder,
  options,
  value,
  open,
  openPopup,
}) => {
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button
          onClick={openPopup}
          variant='ghost'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between   border-b rounded-none placeholder:text-grayscale-textIcon-caption'>
          {value ? (
            <span className='flex flex-1'>
              {options.find((option) => option.value === value)?.label}
            </span>
          ) : (
            <span className='text-muted-foreground flex flex-1'>
              {placeholder}
            </span>
          )}
          <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
