'use client';
import { logoImage } from '@/lib/constants';
import { inter } from '@/lib/fonts';
import { scrollIntoView } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, scaleX: 0.99 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      className={`sticky left-0 top-0 z-30 h-20 bg-gray-900/70 backdrop-blur-xl transition-all sm:h-24`}
    >
      <div className="cont flex items-center">
        <Link href="/" className="md:text-md flex items-center space-x-3">
          <img loading="lazy" decoding="async" src={logoImage} alt="logo" className="size-11" />
          <span
            className={`${inter.className} hidden font-semibold xs:block xs:text-xl md:hidden md:text-xl lg:block`}
          >
            AstroGenesis
          </span>
        </Link>

        <span className="ml-auto" />
        <nav className="hidden items-center justify-start text-[15px] font-medium text-gray-200/95 md:flex md:space-x-10 lg:space-x-12">
          <button onClick={scrollIntoView('about-us')} className="hover:text-gray-300/80">
            About
          </button>
          <button onClick={scrollIntoView('team')} className="hover:text-gray-300/80">
            Team
          </button>
          <button onClick={scrollIntoView('services')} className="hover:text-gray-300/80">
            Services
          </button>
          <button onClick={scrollIntoView('testimonials')} className="hover:text-gray-300/80">
            Testimonials
          </button>
        </nav>
        <button
          onClick={scrollIntoView('contact-us')}
          className="group ml-10 flex h-[38px] items-center space-x-2 rounded-full bg-gray-200 px-5 text-gray-900 transition hover:brightness-110 active:scale-95"
        >
          <span>Let&apos;s get started</span>
          <MoveRight className="size-5 transition group-hover:translate-x-1" />
        </button>
      </div>
    </motion.header>
  );
}
