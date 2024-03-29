import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, format = 'YYYY-MM-DD') {
  let date = dayjs(dateString).format(format);
  return date;
}

export function routeFilter(params: any) {
  return new URLSearchParams(params);
}

export function saveUserInfo(user: any) {
  sessionStorage.setItem('userInfo', JSON.stringify(user));
}

export function getUserInfo() {
  const userInfo = sessionStorage.getItem('userInfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return undefined;
}
