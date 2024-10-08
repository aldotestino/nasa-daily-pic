import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nasa Daily Pic',
  description: 'A simple app to view the daily picture from NASA',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen grid grid-rows-[auto,1fr,auto]', inter.className)}>
        <Suspense>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
