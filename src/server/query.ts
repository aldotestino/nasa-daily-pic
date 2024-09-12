import { NasaApodResponseBody } from '@/lib/types';
import env from './env';
import { isValid, isToday, add, sub, format } from 'date-fns';
import { DATE_FORMAT } from '@/lib/data';
import { isValidFormat } from '@/lib/utils';

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod';

export async function getPictureData(date?: string) {

  const params = new URLSearchParams();
  params.append('api_key', env.NASA_API_KEY);

  if (date && isValidFormat(date)) {
    params.append('date', date);
  }

  const res = await fetch(`${NASA_API_URL}?${params.toString()}`);
  const data: NasaApodResponseBody = await res.json();

  return {
    ...data,
    nextDate: isToday(data.date) ? null : format(add(data.date, { days: 1 }), DATE_FORMAT),
    prevDate: format(sub(data.date, { days: 1 }), DATE_FORMAT),
  };
}