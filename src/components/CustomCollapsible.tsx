import { ChevronUp, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { SidebarGroup } from './ui/sidebar';
import {
  CollapsibleTrigger,
  Collapsible,
  CollapsibleContent,
} from './ui/collapsible';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type CustomCollapsibleProps = {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};
export const CustomCollapsible: React.FC<CustomCollapsibleProps> = ({
  title,
  children,
  onClick,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant='ghost'
          className={cn('w-full flex justify-between px-2', className)}
          onClick={onClick}>
          {title}
          {isOpen ? (
            <ChevronUp className='h-4 w-4' />
          ) : (
            <ChevronDown className='h-4 w-4' />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarGroup className='flex flex-col space-y-2'>
          {children}
        </SidebarGroup>
      </CollapsibleContent>
    </Collapsible>
  );
};
