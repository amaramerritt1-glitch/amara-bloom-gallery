import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato, Crimson_Text } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-italic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bloom Gallery',
  description: 'An illuminated manuscript of dimensional portals',
  openGraph: {
    title: 'Bloom Gallery',
    description: 'An illuminated manuscript of dimensional portals',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable} ${crimson.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
