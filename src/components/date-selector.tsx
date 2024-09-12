import { add, format, isToday, sub } from 'date-fns';
import { Button } from './ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';
import { DATE_FORMAT } from '@/lib/data';
import { useRouter } from 'next/navigation';

function DateSelector({ baseDate }: {baseDate: Date}) {

  const router = useRouter();
  const [date, setDate] = useState<Date>(baseDate);

  const { nextDate, prevDate } = useMemo(() => ({
    nextDate: isToday(date) ? null : add(date, { days: 1 }),
    prevDate: sub(date, { days: 1 }),
  }), [date]);

  function onSelectNext() {
    if (!nextDate) return;
    setDate(nextDate);
    router.push(`/?date=${format(nextDate, DATE_FORMAT)}`);
  }

  function onSelectPrev() {
    setDate(prevDate);
    router.push(`/?date=${format(prevDate, DATE_FORMAT)}`);
  }

  const onSelectDate: SelectSingleEventHandler = (selectedDate) => {
    if (!selectedDate) return;
    setDate(selectedDate);
    router.push(`/?date=${format(selectedDate, DATE_FORMAT)}`);
  };

  return (
    <div className='w-full max-w-[392px] grid grid-cols-[auto,1fr,auto] gap-4'>
      <Button onClick={onSelectPrev} size="icon" variant="outline">
        <ChevronLeft />
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? <span>{format(date, 'PPP')}</span> : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onSelectDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Button onClick={onSelectNext} size="icon" variant="outline" disabled={!nextDate}>
        <ChevronRight />
      </Button>
    </div>
  );
}

export default DateSelector;