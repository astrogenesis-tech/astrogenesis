'use client';
import { nodejsImage, postgresqlImage, reactImage, wordpressImage } from '@/lib/constants';
import { useCallback, useLayoutEffect, useState } from 'react';
import OrbitingCircles from './orbiting-circle';

export function Orbit() {
  const [innerRadius, setInnerRadius] = useState(40);
  const [outerRadius, setOuterRadius] = useState(120);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 360) {
      setInnerRadius(60);
      setOuterRadius(140);
    } else if (width < 400) {
      setInnerRadius(60);
      setOuterRadius(150);
    } else if (width < 640) {
      setInnerRadius(70);
      setOuterRadius(170);
    } else if (width < 768) {
      setInnerRadius(80);
      setOuterRadius(200);
    } else if (width < 1024) {
      setInnerRadius(70);
      setOuterRadius(150);
    } else if (width < 1280) {
      setInnerRadius(70);
      setOuterRadius(180);
    } else {
      setInnerRadius(80);
      setOuterRadius(200);
    }
  }, []);

  useLayoutEffect(handleResize, [handleResize]);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <section className="relative mx-auto flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black/40 to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-100">
        Astro Genesis
      </span>

      {/* Inner Circles */}
      <OrbitingCircles className="size-8 border-none" duration={20} delay={20} radius={innerRadius}>
        <img src={postgresqlImage} alt="logo" loading="lazy" decoding="async" />
      </OrbitingCircles>
      <OrbitingCircles className="size-8 border-none" duration={20} delay={10} radius={innerRadius}>
        <img src={wordpressImage} alt="logo" loading="lazy" decoding="async" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-10 border-none sm:size-12 md:size-10 lg:size-12"
        reverse
        duration={20}
        radius={outerRadius}
      >
        <img src={nodejsImage} alt="logo" loading="lazy" decoding="async" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-10 border-none sm:size-12 md:size-10 lg:size-12"
        reverse
        duration={20}
        delay={20}
        radius={outerRadius}
      >
        <img src={reactImage} alt="logo" loading="lazy" decoding="async" />
      </OrbitingCircles>
    </section>
  );
}
