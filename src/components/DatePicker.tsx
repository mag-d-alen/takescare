import { useState } from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';

type DatePickerProps = {
  placeholder: string;
  onChange: (date: Date | undefined) => void;
  defaultValue?: Date;
  isDisabled?: (date: Date) => boolean;
};
export const DatePicker: React.FC<DatePickerProps> = ({
  placeholder,
  onChange,
  defaultValue,
  isDisabled,
}) => {
  const [isPopoverOpen, setPopoverOpen] = useState<boolean>(false);
  return (
    <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'ghost'}
          className={cn(
            'w-full justify-start text-left font-normal border-b rounded-none ',
            !defaultValue && 'text-muted-foreground'
          )}>
          {defaultValue ? (
            <span className='flex flex-1'> {format(defaultValue, 'PPP')}</span>
          ) : (
            <span className='text-muted-foreground flex flex-1'>
              {placeholder}
            </span>
          )}
          <span className='text-muted-foreground'>
            <ChevronDown />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={defaultValue}
          onSelect={(value) => {
            onChange(value);
            setPopoverOpen(false);
          }}
          initialFocus
          disabled={isDisabled ? (date) => isDisabled(date) : false}
        />
      </PopoverContent>
    </Popover>
  );
};
