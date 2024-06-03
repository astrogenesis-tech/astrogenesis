'use client';
import { logoImage } from '@/lib/constants';
import { inter } from '@/lib/fonts';
import { wait } from '@/lib/utils';
import { m } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '../ui/drawer';

const navItems: { title: string; href: string }[] = [
  {
    title: 'About',
    href: '/about'
  },
  { title: 'Services', href: '/services' },
  { title: 'Team', href: '/team' }
];

type Props = { children: React.ReactNode };
export default function MobileMenu({ children }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    closeButtonRef.current?.click();
  }, [pathname]);

  const closeMenuOnLargeScreen = () => {
    if (window.innerWidth >= 768) closeButtonRef.current?.click();
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenuOnLargeScreen);
    return () => {
      window.removeEventListener('resize', closeMenuOnLargeScreen);
    };
  }, []);

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="dark flex h-[100dvh] max-h-[100dvh] min-h-screen w-10/12 max-w-screen-xs flex-col rounded-none border-none bg-gray-800/40 p-6 text-gray-200 filter backdrop-blur-xl xs:px-10">
        <m.div
          initial={{ x: -60, opacity: 0, scaleX: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className="mb-10 mt-4 flex items-center space-x-3"
        >
          <img loading="lazy" decoding="async" src={logoImage} alt="logo" className="size-11" />
          <span className={`${inter.className} text-xl font-semibold`}>AstroGenesis</span>
        </m.div>

        <nav className="flex flex-col space-y-5 font-medium">
          {navItems.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ x: -60, opacity: 0, scaleX: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.25 }}
            >
              <Link href={item.href} onClick={() => closeButtonRef.current?.click()}>
                {item.title}
              </Link>
            </m.div>
          ))}
        </nav>
        <m.div
          className="mt-auto"
          initial={{ x: -60, opacity: 0, scaleX: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.25 }}
        >
          <button
            onClick={() => {
              closeButtonRef.current?.click();
              wait(300).then(() => router.push('/#contact-us'));
            }}
            className="group flex h-[38px] w-full items-center justify-center space-x-2 scroll-smooth rounded-full bg-gray-200 px-5 text-base text-gray-900 transition hover:brightness-110 active:scale-95"
          >
            <span>Let&apos;s get started</span>
            <MoveRight className="size-5 transition group-hover:translate-x-1" />
          </button>
        </m.div>
        <DrawerClose ref={closeButtonRef} className="hidden">
          Close
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
