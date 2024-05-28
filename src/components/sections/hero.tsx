'use client';
import { poppins } from '@/lib/fonts';
import { scrollIntoView } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { Orbit } from '../ui/orbit/orbit';

export default function Hero() {
  return (
    <section className="cont flex flex-col justify-center gap-2 py-10 md:grid md:grid-cols-2 md:gap-10 lg:min-h-[calc(100vh-96px)] lg:gap-16 lg:py-0">
      <motion.section
        initial={{ x: -30, opacity: 0, y: -10 }}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={undefined}
        className="flex flex-col justify-center"
      >
        <h1 className="text-center text-4xl font-black xs:text-6xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl">
          <span>Transforming</span>
          <span className="block sm:inline md:block">
            <span className="text-emerald-600"> Ideas </span>
            <span>into</span>{' '}
          </span>
          <span className="text-emerald-600 md:block">Digital Reality</span>
        </h1>

        <div className="spaxe-x-3 my-5 min-h-10 text-center text-xl md:text-left">
          <ReactTyped
            className="text-xl font-semibold text-gray-300/95"
            strings={['Join us on this this fantastic journey.']}
            typeSpeed={40}
          />
        </div>

        <div
          className={`${poppins.className} mx-auto flex w-fit flex-col items-center gap-x-7 gap-y-7 font-semibold md:mx-0 md:flex-row`}
        >
          <button
            onClick={scrollIntoView('about-us')}
            className="group flex h-14 items-center space-x-2 rounded-full bg-emerald-700 px-5 shadow-xl shadow-emerald-500/[0.12] transition hover:shadow-emerald-500/15 hover:brightness-110"
          >
            <span>Learn More</span>
            <ChevronRight className="transition group-hover:translate-x-1.5" />
          </button>

          <button
            onClick={scrollIntoView('contact-us')}
            className="group flex h-14 items-center space-x-2 rounded-full border-2 border-neutral-300/70 px-5 shadow-xl shadow-white/5 transition hover:bg-neutral-100 hover:text-black hover:shadow-white/10"
          >
            <span>Contact Us</span>
            <ChevronRight className="transition group-hover:translate-x-1.5" />
          </button>
        </div>
      </motion.section>

      <motion.div
        initial={{ scale: 0.5, opacity: 0, x: 30, y: 10 }}
        whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        className="grid place-items-center"
      >
        <Orbit />
      </motion.div>
    </section>
  );
}
