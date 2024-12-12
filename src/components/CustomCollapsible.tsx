import { ChevronUp, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { SidebarGroup } from './ui/sidebar';
import {
  CollapsibleTrigger,
  Collapsible,
  CollapsibleContent,
} from './ui/collapsible';
import { Button } from './ui/button';

type CustomCollapsibleProps = {
  title: string;
  children: React.ReactNode;
};
export const CustomCollapsible: React.FC<CustomCollapsibleProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant='ghost' className='w-full'>
          <span className='w-full'>{title}</span>
          {isOpen ? (
            <ChevronUp className='h-4 w-4' />
          ) : (
            <ChevronDown className='h-4 w-4' />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarGroup>{children}</SidebarGroup>
      </CollapsibleContent>
    </Collapsible>
  );
};
