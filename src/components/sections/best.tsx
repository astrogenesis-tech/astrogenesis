'use client';
import { revealFromBottom, revealFromTop } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Clock12, Gem, Headset, Webhook } from 'lucide-react';

const list = [
  { icon: Headset, title: '24/7 Support' },
  { icon: Webhook, title: 'Fantastic young developers' },
  {
    icon: Gem,
    title: 'Top notch product'
  },
  { icon: Clock12, title: 'On time delivery' }
];

export default function Best() {
  return (
    <section className="cont my-16 md:my-32 lg:my-40">
      <motion.h3 {...revealFromTop} className="section-title">
        <span>We are the</span> <span className="text-emerald-600">Best</span> <span>in the</span>{' '}
        <span className="text-emerald-600">Market</span>{' '}
      </motion.h3>

      <motion.div {...revealFromBottom} className={`mt-12 grid place-items-center lg:grid-cols-4`}>
        {list.map((item, i) => (
          <div key={i} className="relative m-6 flex h-full w-full flex-col items-center space-y-7">
            {backgroundShadow}
            <item.icon className="size-12 text-teal-600" />
            <span className="text-center text-lg font-medium tracking-wide text-gray-300 lg:text-base xl:text-lg">
              {item.title}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const backgroundShadow = (
  <div className="absolute inset-0 -z-10">
    <section className="grid h-full w-full place-items-center">
      <div className="aspect-square h-4/6 rounded-full bg-emerald-700/[0.12] blur-3xl filter" />
    </section>
  </div>
);
