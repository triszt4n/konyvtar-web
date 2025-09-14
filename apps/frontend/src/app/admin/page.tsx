import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function AdminPage() {
  const isAdmin = true;

  return (
    <main>
      <h1 className='text-4xl font-medium tracking-tight lg:text-5xl font-heading mt-12 mb-6'>
        Adminisztratív lehetőségek
      </h1>
      {isAdmin && (
        <>
          <h2 className='text-2xl font-medium tracking-tight lg:text-3xl font-heading mb-4 text-end'>
            Oldalkezelői lehetőségek
          </h2>
          <div className='flex h-8 items-center space-x-2 mb-6 justify-end'>
            <Link href='/'>
              <Button variant='ghost'>Összes kölcsönzés kezelése</Button>
            </Link>
            <Separator orientation='vertical' />
            <Link href='/'>
              <Button variant='ghost'>Könyvek kezelése</Button>
            </Link>
            <Separator orientation='vertical' />
            <Link href='/'>
              <Button variant='ghost'>Polcok kezelése</Button>
            </Link>
            <Separator orientation='vertical' />
            <Link href='/'>
              <Button variant='ghost'>Felhasználók kezelése</Button>
            </Link>
            <Separator orientation='vertical' />
            <Link href='/'>
              <Button variant='ghost'>Hibajegyek kezelése</Button>
            </Link>
          </div>
          <Separator orientation='horizontal' />
        </>
      )}
      <h2 className='text-2xl font-medium tracking-tight lg:text-3xl font-heading mb-4 mt-6'>
        Saját kölcsönzéseim áttekintése
      </h2>
    </main>
  );
}
