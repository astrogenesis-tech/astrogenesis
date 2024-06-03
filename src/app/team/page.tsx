'use client';
import { revealFromBottom, revealFromTop } from '@/lib/animations';
import { teamMembers } from '@/lib/constants';
import { m } from 'framer-motion';
import Image from 'next/image';

export default function page() {
  return (
    <main className="flex h-full min-h-[calc(100vh-96px)] flex-col">
      <m.h1
        {...revealFromTop}
        className="mx-auto my-10 text-center text-4xl font-bold uppercase text-emerald-600 md:text-5xl"
      >
        Our Team
      </m.h1>

      <m.section
        {...revealFromBottom}
        className="cont my-10 flex flex-wrap items-center justify-center gap-20"
      >
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="cursor-pointer space-y-3 rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
          >
            <Image
              loading="lazy"
              decoding="async"
              src={member.image}
              alt="team member image"
              height={1920}
              width={1080}
              quality={100}
              className="size-60 rounded-full border-4 border-gray-100 bg-gray-100 object-cover"
            />
            <h1 className="text-center text-2xl font-medium text-gray-100">{member.name}</h1>
            <p className="text-md text-center text-gray-300/90">{member.role}</p>
          </div>
        ))}
      </m.section>
      <h3 className="text-center"></h3>
    </main>
  );
}
