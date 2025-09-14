import { LoadingSpinner } from '@/components/loading-spinner';
import { useMe } from '@/hooks/use-me.hook';

export default async function BorrowingsPage() {
  const me = useMe();

  if (true || me.isLoading) {
    return (
      <div className='flex justify-center my-12'>
        <LoadingSpinner />
      </div>
    );
  }

  // redirect('/borrowings/' + me.data?.id);
}
