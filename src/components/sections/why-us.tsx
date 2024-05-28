'use client';
import { revealFromLeft, revealFromRight } from '@/lib/animations';
import { whyUsImage } from '@/lib/constants';
import { poppins } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

export default function WhyUs() {
  return (
    <section
      className={`${poppins.className} cont my-6 grid items-center space-y-12 rounded-lg bg-gray-800/40 py-10 md:my-10 lg:my-20 lg:grid-cols-2 lg:space-y-0`}
    >
      <div className="relative lg:p-10 xl:p-20">
        {backgroundShadow}
        <h3 className="min-h-10 text-4xl font-semibold">
          <ReactTyped
            strings={['Why AstroGenesis?']}
            typeSpeed={40}
            startDelay={500}
            startWhenVisible
          />
        </h3>
        <motion.p {...revealFromLeft} className="mt-7 text-gray-300/80">
          We excel in software innovation, offering tailored s1 olutions with industry-leading
          expertise. Our commitment to quality ensures robust and scalable software delivered on
          time. With ongoing support and competitive pricing, we re dedicated to your success,
          making us your trusted partner in the digital landscape.
        </motion.p>
      </div>

      <motion.img
        loading="lazy"
        decoding="async"
        className="max-h-80 w-full object-contain"
        src={whyUsImage}
        alt="img"
        {...revealFromRight}
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
