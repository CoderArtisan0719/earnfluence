'use client';

import React, { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconUser, IconLogout } from '@tabler/icons-react';
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import { navBarContents } from '@/data/navbar-contents';
import Link from 'next/link';
import { useAuth } from '@/app/provider/AuthContext';
import PlaceholdersAndVanishInputDemo from "@/components/ui/PlaceholdersAndVanishInputDemo"

import { MdBorderColor } from "react-icons/md";
import { MdOutlineInbox } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

type HeaderProps = {
  className: string
};

const Header = ({ className }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(true);

  const { user, logout } = useAuth();
  const [flgNavBar, setFlgNavBar] = useState(0);
  
  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset <= 600);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex py-3 px-16 items-center justify-between ${className} ${isSticky ? 'sticky top-0 z-50' : ''}`}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-transparent'>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='flex w-[400px] md:w-[500px] lg:w-[600px] text-[#F8FAFC]'>
                <ul className="grid w-[150px] gap-3 p-4 md:grid-cols-1 border-r border-r-gray-500">
                  {navBarContents.map((component, index) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      onMouseOver={() => setFlgNavBar(index)}
                    />
                  ))}
                </ul>

                <div className='flex-1 grid grid-cols-2 p-8 gap-y-[10px]'>
                  {
                    navBarContents[flgNavBar].suburls.map((item, index) => (
                      <Link key={index} className="text-[]" href={`${navBarContents[flgNavBar].href}/${item.url}`}>{item.title}</Link>
                    ))
                  }
                </div>
              </div>
          </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                How it works
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/join-talent" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Join as talent
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-2/5">
        <PlaceholdersAndVanishInputDemo />
      </div>
      {
        user ?
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><IconUser className="h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <VscAccount className="mr-2 h-4 w-4" />
                <span>My Account</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUser className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <MdBorderColor className="mr-2 h-4 w-4" />
              <span>Orders</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <MdOutlineInbox className="mr-2 h-4 w-4" />
              <span>Inbox</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RiUserFollowFill className="mr-2 h-4 w-4" />
              <span>following</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <MdCardGiftcard className="mr-2 h-4 w-4" />
              <span>Gift Cards</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IoVideocam className="mr-2 h-4 w-4" />
              <span>Liked videos</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <IconLogout className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
        : <Link href="/sign-in" className='text-white hover:underline font-medium'>Login</Link>
      }
    </div>
  )
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, onMouseOver, ...props }, ref) => {
  return (
    <li className=''>
      <NavigationMenuLink asChild>
        <Link
          href={href ? href : ""}
          onMouseOver={onMouseOver}
          className={cn(
            "flex justify-start items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-[100%]",
            className
          )}
          {...props}
        >
          <div className="text-[18px] font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem";
