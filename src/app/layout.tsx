import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: ['/favicon.ico'],
  title: 'AstroGenesis Technologies',
  description:
    'Astrogenesis Technologies is a complete web service solution for digitally managed business, brands, consultancies, schools, colleges, hotels and restaurants.',

  openGraph: {
    title: 'Astrogenesis Technologies',
    type: 'website',
    url: 'https://www.astrogenesis.tech',
    description:
      'Astrogenesis Technologies is a complete web service solution for digitally managed business, brands, consultancies, schools, colleges, hotels and restaurants.',
    images: ['https://i.postimg.cc/nVNHZr8k/astrogenesis-og.webp']
  },

  twitter: {
    title: 'Astrogenesis Technologies',
    site: 'https://www.astrogenesis.tech',
    description:
      'Astrogenesis Technologies is a complete web service solution for digitally managed business, brands, consultancies, schools, colleges, hotels and restaurants.',
    card: 'summary_large_image',
    images: ['https://i.postimg.cc/nVNHZr8k/astrogenesis-og.webp']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full overflow-x-hidden bg-gray-900 text-neutral-100`}>
        <Navbar />
        <Toaster closeButton duration={3000} richColors theme="dark" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
