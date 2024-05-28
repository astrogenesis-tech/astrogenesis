'use client';
import { revealFromBottom, revealFromTop } from '@/lib/animations';
import { whyUsImage } from '@/lib/constants';
import { poppins } from '@/lib/fonts';
import { scrollIntoView } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const services: { title: string; image: string; description: string }[] = [
  {
    title: 'Hotel Management System',
    description:
      'we provide world class hotel managemen system service all over the world,we provide world class hotel managemen system service all over hotel managemen system service all over the world',
    image: whyUsImage
  },
  {
    title: 'Digital Dashboard',
    description:
      'we provide world class hotel managemen system service all over the world,we provide world class hotel managemen system service all over hotel managemen system service all over the world',
    image: whyUsImage
  },
  {
    title: 'Brand Marketplace',
    description:
      'we provide world class hotel managemen system service all over the world,we provide world class hotel managemen system service all over hotel managemen system service all over the world',
    image: whyUsImage
  },
  {
    title: 'Ecommerce Website',
    description:
      'we provide world class hotel managemen system service all over the world,we provide world class hotel managemen system service all over hotel managemen system service all over the world',
    image: whyUsImage
  }
];

export default function Services() {
  return (
    <section className="cont my-20 md:my-32 lg:my-40" id="services">
      <motion.h3 {...revealFromTop} className="section-title">
        <span>What</span> <span className="text-emerald-600">Services</span> <span>do we </span>{' '}
        <span className="text-emerald-600">Offer</span>
      </motion.h3>

      <motion.div
        {...revealFromBottom}
        className={`${poppins.className} mt-12 grid md:grid-cols-2`}
      >
        {services.map((service, i) => (
          <motion.div
            initial={{ y: 30, opacity: 0, x: -10 }}
            whileInView={{ y: 0, opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + 0.1 * i }}
            viewport={{ once: true }}
            key={i}
            className="mx-3 mb-20 flex flex-col rounded-lg bg-gray-800/40 p-4 md:mb-5"
          >
            <img src={service.image} className="max-h-60 rounded-md object-contain" alt="image" />
            <h3 className="my-2 text-lg font-semibold">{service.title}</h3>
            <p className="mb-6 text-sm text-gray-400">{service.description}</p>
            <button
              onClick={scrollIntoView('contact-us')}
              className="group mx-auto mt-auto flex w-full items-center justify-center space-x-3 rounded-full bg-white px-5 py-2 font-medium text-gray-900 hover:brightness-110"
            >
              <span className="transition group-hover:-translate-x-1">Book now</span>
              <MoveRight className="size-6 transition group-hover:translate-x-2" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
