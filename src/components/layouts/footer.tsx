import { logoImage } from '@/lib/constants';
import { Copyright } from 'lucide-react';

import React from 'react';

export default function footer() {
  return (
    <footer className="cont md:pb-0">
      <div className="flex flex-col justify-between space-y-10 py-6 sm:flex-row sm:items-center sm:space-x-10 sm:space-y-0">
        <img
          src={logoImage}
          alt="logo"
          className="size-10 object-contain sm:size-14"
          loading="lazy"
          decoding="async"
        />
        <div className="flex space-x-3 font-medium text-gray-300">
          <Copyright />
          <span>2024 AstroGenesis Technologies. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
