import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type SearchSelectProps = {
  setFieldValue: (value: string) => void;
  onChange: () => void;
  value?: string;
  placeholder?: string;
  options: any[];
};

export const SearchSelect: React.FC<SearchSelectProps> = ({
  setFieldValue,
  value,
  placeholder,
  options,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant='ghost'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between border-b rounded-none placeholder:text-grayscale-textIcon-caption'>
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
      <PopoverContent>
        <Command onValueChange={onChange} value={value}>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>Nie znaleziono wynikow</CommandEmpty>
            <CommandGroup>
              {options.map((option: { value: string; label: string }) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setFieldValue(currentValue);
                    setOpen(false);
                  }}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4 ',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
