import Team from '@/components/sections/team';
import { TeamMember } from '@/lib/constants';
import React from 'react';

export default function page() {
  return (
    <div className="flex h-full flex-col ">
      <div>
        <h1 className="section-title p-10 text-center text-5xl font-bold text-emerald-600 ">
          Our Team
        </h1>
      </div>
      <div className=" cont my-10 flex flex-wrap items-center justify-center gap-20  ">
        {TeamMember.map((item, index) => (
          <Team key={index} name={item.name} imgSrc={item.imgSrc} post={item.post} />
        ))}
      </div>
    </div>
  );
}
