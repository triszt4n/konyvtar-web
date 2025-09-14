'use client';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

import { AuthProvider } from '@/components/auth-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

export const queryClient = new QueryClient();

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang='hu' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
              <TooltipProvider>
                <div className='flex min-h-screen w-full flex-col'>
                  <Navbar />
                  <div className='flex min-h-[calc(100vh_-_theme(spacing.84))] flex-1 flex-col gap-4 p-4 md:gap-8'>
                    <main>
                      <div>{children}</div>
                    </main>
                    <Toaster />
                  </div>
                  <Footer />
                </div>
              </TooltipProvider>
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
