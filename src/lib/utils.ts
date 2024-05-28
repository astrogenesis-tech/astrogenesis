import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollIntoView = (target: string) => {
  return () => {
    const targetElement = document.getElementById(target);
    if (!targetElement) return;
    let scrollLength = targetElement.offsetTop - 114;
    if (window.innerWidth < 640) scrollLength = targetElement.offsetTop - 100;
    window.scroll({ top: scrollLength, behavior: 'smooth' });
  };
};
