'use client';

import { useSearchParams } from 'next/navigation';
import DateSelector from './date-selector';
import { getBaseDate } from '@/lib/utils';

function Header() {

  const searchParams = useSearchParams();

  return (
    <header className="py-4 lg:py-6 shadow-sm z-10">
      <div className="max-w-screen-lg px-4 lg:px-0 mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h1 className="text-3xl font-bold text-center">Nasa Daily Pic</h1>
        <DateSelector baseDate={getBaseDate(searchParams.get('date'))} />
      </div>
    </header>
  );
}

export default Header;