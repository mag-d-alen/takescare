import React, { useState } from 'react';
import moment from 'moment';
import { Button } from './ui/button';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Command,
} from '@/components/ui/command';

type TimeRangeInputProps = {
  appointmentDate: Date;
  saveFields: ({ from, to }: { from: string; to: string }) => void;
  value: { from: string; to: string };
  onChange: () => void;
  startHour: string;
};
export const TimeRangeInput: React.FC<TimeRangeInputProps> = ({
  appointmentDate,
  value,
  saveFields,
  onChange,
  startHour,
}) => {
  const [isToOpen, setIsToOpen] = useState(false);
  const [isFromOpen, setIsFromOpen] = useState(false);

  const isAppointmentToday = moment(appointmentDate).isSame(moment(), 'day');

  const earliestFromHour = isAppointmentToday
    ? moment().startOf('hour').add(2, 'hours')
    : moment().startOf('day');
  const latestFromHour = moment(earliestFromHour).set('hours', 22);

  const earliestToHour = startHour
    ? moment(startHour, 'HH:mm')
    : moment(earliestFromHour).add(1, 'hours');
  const latestToHour = moment(earliestFromHour).set('hours', 23);

  const fromDuration = moment.duration(latestFromHour.diff(earliestFromHour));
  const fromHoursNumber = fromDuration.asHours();

  const toDuration = moment.duration(latestToHour.diff(earliestToHour));
  const toHoursNumber = toDuration.asHours();

  const fromOptions = Array.from({ length: fromHoursNumber }, (_, index) =>
    earliestFromHour.add(1, 'hours').format('HH:mm')
  );
  const toOptions = Array.from({ length: toHoursNumber }, (_, index) =>
    earliestToHour.add(1, 'hours').format('HH:mm')
  );
  return (
    <div className='flex justify-between  z-50 space-x-4'>
      <Popover open={isFromOpen} onOpenChange={setIsFromOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='ghost'
            role='combobox'
            aria-expanded={isFromOpen}
            className='w-full justify-between   border-b rounded-none'>
            {value?.from?.length > 0 ? value.from : 'Od'}
            <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command onValueChange={onChange} value={value?.from}>
            <CommandInput placeholder='Od' />
            <CommandList>
              <CommandEmpty>Nie znaleziono wynikow</CommandEmpty>
              <CommandGroup>
                {fromOptions.map((option: string) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={(currentValue) => {
                      saveFields({ ...value, from: currentValue });
                      setIsFromOpen(false);
                    }}>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value?.from === option ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Popover open={isToOpen} onOpenChange={setIsToOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='ghost'
            role='combobox'
            aria-expanded={isToOpen}
            className='w-full justify-between   border-b rounded-none'>
            {value?.to?.length > 0 ? value.to : 'Do'}
            <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Command onValueChange={onChange} value={value.to}>
            <CommandInput placeholder='Do' />
            <CommandList>
              <CommandEmpty>Nie znaleziono wynikow</CommandEmpty>
              <CommandGroup>
                {toOptions.map((option: string) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={(currentValue) => {
                      saveFields({ ...value, to: currentValue });
                      setIsToOpen(false);
                    }}>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value.to === option ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
