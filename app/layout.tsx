import type {Metadata} from 'next';
import { Syne, DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css'; // Global styles

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  weight: ['400', '500', '700'],
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebasneue',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Ahmed Nour | Premium Video Editor & Client Acquisition Portfolio',
  description: 'I edit videos that drive sales. Freelance video editor for high-growth brands and creators in Egypt, Saudi Arabia, and UAE.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${bebasNeue.variable}`}>
      <body className="bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
