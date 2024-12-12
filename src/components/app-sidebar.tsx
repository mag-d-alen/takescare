import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from './Logo';
import { Separator } from '@/components/ui/separator';

export function AppSidebar({
  children,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant='inset'
      {...props}
      className='bg-grayscale-background-subtle rounded-md m-24 mt-32 mr-0 pb-32'>
      <SidebarContent className='p-6 rounded-lg max-h-fit bg-base-white'>
        <SidebarHeader className='pl-6'>
          <Avatar className='h-20 w-20 radius-full'>
            <AvatarImage
              src='https://github.com/shadcn.png'
              alt='carlos_avatar'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold text-navy-textIcon-title'>
              Carlos Nascimento
            </h2>
            <p className='text-start text-grayscale-textIcon-caption'>
              Operator
            </p>
            <p className=' text-start text-grayscale-textIcon-caption'>
              name@gmail.com
            </p>
          </div>
        </SidebarHeader>
        <Separator className='mt-6' />
        <SidebarGroup>{children}</SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
