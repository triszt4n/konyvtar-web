import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDateTime(dateTime: string, options: Intl.DateTimeFormatOptions = {}) {
  return new Date(dateTime).toLocaleString('hu-HU', options);
}
