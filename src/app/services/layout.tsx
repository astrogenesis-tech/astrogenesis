import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services - Astrogenesis Technologies'
};

type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
  return children;
}
