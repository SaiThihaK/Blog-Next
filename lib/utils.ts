import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Have to modify later...
export function formatDate(dateString: string) {
  let date = new Date(dateString);
  return date.toLocaleDateString();
}
