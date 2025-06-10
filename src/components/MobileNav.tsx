'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden">
      <div className="flex justify-around items-center py-2">
        <NavItem
          href="/"
          label="Home"
          active={pathname === '/'}
          icon={
            <Home size={22} stroke={pathname === '/' ? '#66bb6a' : '#4b5563'} />
          }
        />
        <NavItem
          href="/services"
          label="Services"
          active={pathname === '/services'}
          icon={
            <Briefcase
              size={22}
              stroke={pathname === '/services' ? '#66bb6a' : '#4b5563'}
            />
          }
        />
        <NavItem
          href="/about"
          label="About"
          active={pathname === '/about'}
          icon={
            <Info
              size={22}
              stroke={pathname === '/about' ? '#66bb6a' : '#4b5563'}
            />
          }
        />

        <a
          href="https://wa.me/6285172268408"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-[#66bb6a] hover:bg-[#4caf50] transition-colors"
          aria-label="Chat via WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center text-xs ${
        active ? 'text-[#66bb6a]' : 'text-gray-600 hover:text-[#66bb6a]'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
