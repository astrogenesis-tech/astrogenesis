'use client';
import { scrollIntoView } from '@/lib/utils';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-30 flex h-20 w-full items-center justify-around bg-gray-900/70 px-4 text-sm font-medium backdrop-blur-xl transition-all xs:text-[15px] sm:px-4 md:hidden">
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
  );
}
