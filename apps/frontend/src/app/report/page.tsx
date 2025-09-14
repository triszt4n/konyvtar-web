import { Separator } from '@/components/ui/separator';

export default function BorrowingsPage() {
  return (
    <main>
      <h1 className='text-4xl font-medium tracking-tight lg:text-5xl font-heading my-12'>Hibajegyek</h1>
      <h2 className='text-2xl font-medium tracking-tight lg:text-3xl font-heading mb-4'>Új hibajegy felvétele</h2>
      <div className='flex h-8 items-center space-x-2 mb-6'>itt lesz a form</div>
      <Separator orientation='horizontal' />
      <h2 className='text-2xl font-medium tracking-tight lg:text-3xl font-heading mt-4 mb-6'>Megoldatlan hibajegyek</h2>
    </main>
  );
}
