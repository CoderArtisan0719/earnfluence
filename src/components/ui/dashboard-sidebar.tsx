'use client';

import {
  ExitIcon,
  GearIcon,
  LayersIcon,
  PlayIcon,
} from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

import DashboardSidebarList from './dashboard-sidebar-list';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserTableType } from '@/types';

type DashboardSidebarProps = {
  success?: boolean;
  className?: string;
};

type MenuItemType = {
  title: string;
  icon: JSX.Element;
  link: string;
};

const DashboardSidebar = (props: DashboardSidebarProps) => {
  const [user, setUser] = useState<UserTableType>();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  const router = useRouter();

  const handleLogout = () => {
    const userInfo = sessionStorage.getItem('userInfo');

    if (userInfo) {
      sessionStorage.removeItem('userInfo');
      router.push('/');
    }
  };

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo');
    
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      setUser(parsedUserInfo);
      console.log(parsedUserInfo, 'pased')
      if (parsedUserInfo) {
        setMenuItems([
          {
            title: 'Dashboard',
            icon: <LayersIcon />,
            link: '/influencer',
          },
          {
            title: 'Active Bids',
            icon: <PlayIcon />,
            link: '/influencer/active',
          },
          {
            title: 'Payments',
            icon: <span className="px-1">$</span>,
            link: '/influencer/transaction',
          },
        ]);
      }
    }
  }, [props.success]);

  return (
    <div className={`${props.className} flex flex-col justify-between`}>
      <div>
        <div className="mt-8 flex cursor-pointer items-center overflow-hidden rounded-lg py-4 pl-2 hover:bg-gray-800">
          <div className="size-12 flex-none rounded-full">
            <Avatar className="size-full">
              <AvatarImage className="border-none" src={user?.photo} />
              <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold text-white">
              {user?.fullname ? (
                <>
                  {user.fullname.split(' ')[0]?.[0]?.toUpperCase()}
                  {user.fullname.split(' ')[1]?.[0]?.toUpperCase()}
                </>
              ) : (
                <span>?</span>
              )}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="px-4">
            <p className="text-lg">{user?.fullname}</p>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <hr className="mt-4" />

        {menuItems.map((list, index) => (
          <DashboardSidebarList {...list} key={index} />
        ))}
      </div>

      <div className="mb-4">
        {[
          {
            title: 'Settings',
            icon: <GearIcon />,
            link: '/auth/settings',
          },
          {
            title: 'Log out',
            icon: <ExitIcon />,
            onClick: handleLogout,
          },
        ].map((list, index) => (
          <DashboardSidebarList {...list} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
