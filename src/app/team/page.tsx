import Team from '@/components/sections/team';
import { TeamMember } from '@/lib/constants';
import React from 'react';

export default function page() {
  return (
    <div className="flex h-screen flex-col ">
      <div>
        <h1 className="section-title p-10 text-center text-5xl font-bold text-emerald-600 ">
          Our Team
        </h1>{' '}
      </div>
      <div className="mt-8 flex items-center justify-center gap-14">
        {TeamMember.map((item, index) => (
          <Team key={index} name={item.name} imgSrc={item.imgSrc} post={item.post} />
        ))}
      </div>
    </div>
  );
}
