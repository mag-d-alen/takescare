import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Breadcrumbs } from './Breadcrumbs';

import {
  BriefcaseMedical,
  Calendar,
  ChartBar,
  CircleHelp,
  Headset,
  Home,
  Hospital,
  Layers2,
  LogOut,
  Notebook,
  Settings,
} from 'lucide-react';
import { Separator } from './ui/separator';
const data = {
  navMain: [
    {
      title: 'Strona główna',
      url: '/',
      icon: <Home />,
    },
    {
      title: 'Wizyty online',
      url: '/online-appointments',
      icon: <Headset />,
    },
    {
      title: 'Wizyty domowe',
      url: '/home-appointments',
      icon: <BriefcaseMedical />,
    },
    {
      title: 'Wizyty stacjonarne',
      url: '/stationary-appointments',
      icon: <Hospital />,
    },
    {
      title: 'Druga opinia',
      url: '/second-opinion',
      icon: <Layers2 />,
    },
    {
      title: 'Dziennik aktywności',
      url: '/',
      icon: <Notebook />,
    },
    {
      title: 'Kalendarz specjalistów',
      url: '/',
      icon: <Calendar />,
    },
    {
      title: 'Raporty',
      url: '/',
      icon: <ChartBar />,
    },
  ],
  settings: [
    {
      title: 'Ustawienia',
      url: '/settings',
      icon: <Settings />,
    },
    {
      title: 'FAQ',
      url: '/',
      icon: <CircleHelp />,
    },
  ],
  otherItems: [
    {
      title: 'Wyloguj',
      url: '/logout',
      icon: <LogOut />,
    },
  ],
};

export const Dashboard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ButtonContainer: React.FC<{
    title: string;
    url: string;
    icon: React.ReactNode;
  }> = ({ title, url, icon }) => (
    <SidebarMenuItem className='mb-4 list-none'>
      <SidebarMenuButton asChild>
        <a href={url} className='font-medium space-x-2'>
          {icon} <p className='font-base'> {title}</p>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
  const sidebarMainSectionItems = data.navMain.map((item) => (
    <ButtonContainer
      key={item.title}
      title={item.title}
      url={item.url}
      icon={item.icon}
    />
  ));
  const sidebarSettingsSectionItems = data.settings.map((item) => (
    <ButtonContainer
      key={item.title}
      title={item.title}
      url={item.url}
      icon={item.icon}
    />
  ));
  const otherItems = data.otherItems.map((item) => (
    <ButtonContainer
      key={item.title}
      title={item.title}
      url={item.url}
      icon={item.icon}
    />
  ));
  const SidebarItems = () => (
    <SidebarMenu>
      {sidebarMainSectionItems}
      <Separator />
      {sidebarSettingsSectionItems}
      <Separator />
      {otherItems}
    </SidebarMenu>
  );

  return (
    <SidebarProvider>
      <AppSidebar>
        <SidebarItems />
      </AppSidebar>
      <SidebarInset className='m-0 bg-grayscale-background-subtle px-[10px] '>
        <section className='flex flex-col items-start h-16 shrink-0  gap-2 mb-6 '>
          <Breadcrumbs />
          <div className={'h-10 leading-10 font-sans text-[2.5rem] font-light '}>
            Umawianie wizyty
          </div>
        </section>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
