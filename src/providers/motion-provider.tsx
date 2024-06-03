'use client';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import React from 'react';

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
