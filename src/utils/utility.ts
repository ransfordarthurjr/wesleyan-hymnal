import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}

/*
import of polyfill required in _layout.tsx
but more cryptographically secure
import 'react-native-get-random-values';

export function generateRandomNumber(min: number, max: number): number {
    const randomValue = new Uint32Array(1);
    crypto.getRandomValues(randomValue);

    return (randomValue[0] % (max - min + 1)) + min;
}
*/

export function generateRandomMathNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
