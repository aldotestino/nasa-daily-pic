import { NasaApodResponseBody } from '@/lib/types';
import env from './env';
import { isValidFormat } from '@/lib/utils';
import { da } from 'date-fns/locale';
import { redirect } from 'next/navigation';

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod';

export async function getPictureData(date?: string) {

  const params = new URLSearchParams();
  params.append('api_key', env.NASA_API_KEY);

  if (date && isValidFormat(date)) {
    params.append('date', date);
  }

  const res = await fetch(`${NASA_API_URL}?${params.toString()}`);

  if (res.status >= 400) {
    redirect('/');
  }

  const data: NasaApodResponseBody = await res.json();

  return data;
}