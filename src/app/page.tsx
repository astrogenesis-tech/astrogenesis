import Best from '@/components/sections/best';
import ContactUs from '@/components/sections/contact-us';
import Hero from '@/components/sections/hero';
import Pricing from '@/components/sections/pricing';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import WhyUs from '@/components/sections/why-us';

export default function Page() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <WhyUs />
      <Best />
      <Testimonials />
      <Stats />
      <Pricing />
      <ContactUs />
    </main>
  );
}
