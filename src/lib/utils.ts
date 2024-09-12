import { clsx, type ClassValue } from 'clsx';
import { format, isValid, parse } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { DATE_FORMAT } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidFormat(date: string) {
  const parsedDate = parse(date, DATE_FORMAT, new Date());
  return isValid(parsedDate);
}

export function getBaseDate(date?: string | null) {
  if (date && isValidFormat(date)) return parse(date, DATE_FORMAT, new Date());
  return new Date();
}