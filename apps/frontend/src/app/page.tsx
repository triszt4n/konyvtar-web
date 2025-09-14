import { BookPreview } from '@/components/composite/book-preview';

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl font-medium tracking-tight lg:text-5xl font-heading my-12'>Választék</h1>
      <div className='grid auto-rows-min gap-4 md:grid-cols-5'>
        {Array.from({ length: 20 }).map((_, i) => (
          <BookPreview key={i} />
        ))}
      </div>
    </main>
  );
}
