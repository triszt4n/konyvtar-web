'use client';

import { BookOpenText, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMe } from '../hooks/use-me.hook';
import { useAuth } from './auth-provider';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const routesNavGroup = [
  { navTitle: 'Adminisztráció', path: '/admin', visibleUnauthenticated: false },
  { navTitle: 'Hibabejelentés', path: '/report', visibleUnauthenticated: false },
];

export const Navbar: React.FC = () => {
  const { authenticated, login, logout } = useAuth();
  const { data: me } = useMe();
  const pathname = usePathname();

  return (
    <header className='sticky top-0 flex h-12 items-center gap-4 px-4 md:px-6'>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-8'>
        <Link href='/' className='flex w-20 lg:w-28 items-center'>
          <BookOpenText />
          &nbsp;Könyvtár
        </Link>
        {routesNavGroup.map(
          (route) =>
            route.visibleUnauthenticated && (
              <Link
                key={route.path}
                href={route.path ?? '/'}
                className={`${route.path === pathname ? 'text-tertiary dark:text-tertiary' : 'text-primary dark:text-foreground'} transition-colors hover:text-tertiary dark:hover:text-tertiary font-bold`}
              >
                {route.navTitle}
              </Link>
            )
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link href='/' className='flex w-32 items-center'>
              <BookOpenText />
              &nbsp;Könyvtár
            </Link>
            {routesNavGroup.map((route) => (
              <Link
                key={route.path}
                href={route.path ?? '/'}
                className={`${route.path === pathname ? '' : 'text-muted-foreground'} hover:text-foreground`}
              >
                {route.navTitle}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex w-full md:w-auto items-center gap-4 md:ml-auto md:gap-2'>
        <ModeToggle />
        {authenticated && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon' className='overflow-hidden'>
                <img
                  src={me?.imageUrl}
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-user.jpg';
                  }}
                  width={36}
                  height={36}
                  alt='Avatar'
                  className='overflow-hidden'
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>
                <div>
                  <div className=''>{me?.fullName}</div>
                  <div className='text-xs text-muted-foreground'>{me?.email}</div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/'>Vissza a főoldalra</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  logout();
                }}
              >
                Kijelentkezés
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {!authenticated && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='overflow-hidden'>
                Bejelentkezés
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem
                onClick={() => {
                  login();
                }}
              >
                <div className='flex justify-between items-center'>
                  <Image src='/logo-sch-easy.svg' width={20} height={20} className='mr-2' alt='AuthSCH' />
                  <div>AuthSCH-val</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};
