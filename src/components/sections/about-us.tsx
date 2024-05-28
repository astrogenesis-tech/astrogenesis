'use client';
import { revealFromLeft, revealFromRight } from '@/lib/animations';
import { whyUsImage } from '@/lib/constants';
import { poppins } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className={`${poppins.className} cont my-16 grid items-center space-y-12 rounded-lg bg-gray-800/40 py-10 lg:my-20 lg:grid-cols-2 lg:space-y-0`}
    >
      <div className="relative lg:p-10 xl:p-20">
        {backgroundShadow}
        <h3 className="min-h-10 text-4xl font-semibold">
          <ReactTyped strings={['About us']} typeSpeed={40} startDelay={500} startWhenVisible />
        </h3>
        <motion.p {...revealFromLeft} className="mt-7 text-gray-300/80">
          Astrogenesis Technologies is Nepal based online web service agency.The company is a team
          of the highly skilled and talented young developers. The company aims to provide the
          faster, reliable and top notch services all over the world.
        </motion.p>
      </div>

      <motion.img
        {...revealFromRight}
        loading="lazy"
        decoding="async"
        className="max-h-80 w-full object-contain"
        src={whyUsImage}
        alt="img"
      />
    </section>
  );
}

const backgroundShadow = (
  <div className="absolute inset-0 -z-10 grid place-items-center">
    <section className="relative grid h-full w-full place-items-center">
      <div className="absolute aspect-square w-4/12 rounded-full bg-emerald-700/15 blur-3xl filter backdrop-blur-3xl md:w-8/12 lg:bg-emerald-700/20" />
    </section>
  </div>
);
