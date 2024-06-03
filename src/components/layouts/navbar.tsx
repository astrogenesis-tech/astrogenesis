'use client';
import { logoImage } from '@/lib/constants';
import { inter } from '@/lib/fonts';
import { m } from 'framer-motion';
import { Menu, MoveRight } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';

export default function Navbar() {
  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`sticky left-0 top-0 z-30 h-20 bg-gray-900/40 backdrop-blur-xl transition-all sm:h-24`}
    >
      <div className="cont flex items-center">
        <Link href="/" className="md:text-md flex items-center space-x-3">
          <Image
            src={logoImage}
            alt="logo"
            className="size-10 object-contain xs:size-11"
            width={128}
            height={128}
          />
          <span className={`${inter.className} text-lg font-semibold text-gray-200 xs:text-xl`}>
            AstroGenesis
          </span>
        </Link>

        <span className="ml-auto" />
        <MobileMenu>
          <button className="md:hidden" aria-label="open navigation menu">
            <Menu className="size-6" />
          </button>
        </MobileMenu>
        <nav className="hidden items-center justify-start text-[15px] font-medium text-gray-200/95 md:flex md:space-x-10 lg:space-x-12">
          <Link href="/about" className="hover:text-gray-300/80">
            About
          </Link>
          <Link href="/team" className="hover:text-gray-300/80">
            Team
          </Link>
          <Link href="/services" className="hover:text-gray-300/80">
            Services
          </Link>
          <Link
            href="/#contact-us"
            className="group flex h-[38px] items-center space-x-2 scroll-smooth rounded-full bg-gray-200 px-5 text-gray-900 transition hover:brightness-110 active:scale-95"
          >
            <span>Let&apos;s get started</span>
            <MoveRight className="size-5 transition group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </m.header>
  );
}
