import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import MotionProvider from '@/providers/motion-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'AstroGenesis Technologies';
const description =
  'Astrogenesis Technologies is a complete web service solution for digitally managed business, brands, consultancies, schools, colleges, hotels and restaurants.';
const ogImage = 'https://i.postimg.cc/nVNHZr8k/astrogenesis-og.webp';
const siteUrl = 'https://www.astrogenesis.tech';

export const metadata: Metadata = {
  icons: ['/favicon.ico'],
  title,
  category: 'product/service',
  description,
  keywords: 'astrogenesistech, astrogenesistechnologies, astrogenesistechnology, astrogenesis',

  openGraph: {
    title,
    siteName: title,
    type: 'website',
    url: siteUrl,
    description,
    images: [ogImage]
  },

  twitter: {
    title,
    site: siteUrl,
    description,
    card: 'summary_large_image',
    images: [ogImage]
  },

  authors: [
    { name: 'Bibek Bhattarai', url: 'https://www.instagram.com/bibekjodd/' },
    { name: 'Ronit Adhikari', url: 'https://www.instagram.com/ronitey35' }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full overflow-x-hidden bg-gray-900 text-neutral-100`}>
        <MotionProvider>
          <Navbar />
          <Toaster closeButton duration={3000} richColors theme="dark" />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
