import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@radix-ui/react-navigation-menu';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Bug, Calendar, ChevronDown, Globe } from 'lucide-react';

export const TopNavigation = () => {
  return (
    <NavigationMenu className='w-full fixed z-10 top-0  bg-white border-b'>
      <NavigationMenuList className='flex justify-between px-16 py-6 w-full'>
        <NavigationMenuItem className='flex items-center justify-center  w-[191px] h-[48px]'>
          <Logo />
        </NavigationMenuItem>
        <NavigationMenuItem className='flex items-center justify-center space-x-6'>
          <Button className='px-6' variant='outline'>
            <Bug />
            Zgłoś problem
          </Button>
          <Button
            className='px-6 bg-primary-textIcon-default text-white'
            variant='default'>
            <Calendar />
            Umów wizytę
          </Button>
          <Button variant='link' className='m-0 p-0'>
            <Globe />
            PL <ChevronDown />
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
