import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Easy Way Digital',
  description: 'Solusi digital modern untuk bisnis Anda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#f9fafb]">
        <Header />
        <main className="">{children}</main>
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
