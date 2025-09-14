import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-6 px-4 py-8'>
      <div className='flex flex-col text-center'>
        <div className='pb-2 text-3xl font-semibold tracking-tight'>Kapcsolat</div>
        <Button variant='link' size='lg' className='text-lg text-tertiary'>
          <a href='mailto:konyvtar@simonyi.bme.hu'>konyvtar@simonyi.bme.hu</a>
        </Button>
      </div>
      <div className='flex flex-row gap-6'>
        {/* socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" className="p-2 border-4 border-white rounded-full hover:opacity-60 transition-opacity">
            <img src={s.icon} className="h-6 w-6" />
          </a>
        )) */}
      </div>
      <div className='flex flex-row gap-16'>
        {/* sponsors.map((s) => (
          <a key={s.href} href={s.href} target="_blank" className="hover:opacity-60 transition-opacity">
            <img src={s.icon} className="h-12 max-w-40 w-full" />
          </a>
        )) */}
      </div>
    </footer>
  );
};
