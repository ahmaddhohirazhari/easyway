'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [user] = useState({
    name: '',
    avatar: '/logo3.png',
  });

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-gray-600 hover:text-[#66bb6a] text-sm">
          <div className="flex items-center space-x-2">
            <Image src="/logo3.png" alt="Logo" width={40} height={40} />
            <span className="text-base font-semibold text-[#66bb6a] font-heading hidden md:inline">
              Easy Way Digital
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-[#66bb6a] text-sm">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-[#66bb6a] text-sm"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-[#66bb6a] text-sm"
          >
            About
          </Link>
          <a
            href="https://wa.me/6285172268408"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#66bb6a] text-sm"
            aria-label="Chat via WhatsApp"
          >
            Contact
          </a>
        </nav>

        {/* Auth Area */}
        <div className="flex items-center space-x-3">
          {user.name ? (
            <div className="flex items-center space-x-2">
              <Image
                src={user.avatar}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm text-gray-800 hidden md:inline">
                {user.name}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                href="/auth/login"
                className="text-sm bg-white text-primary hover:bg-[#66bb6a] hover:text-white rounded-md shadow hidden md:inline px-4 py-1.5"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#66bb6a] hover:bg-[#4caf50] text-white text-sm px-4 py-1.5 rounded-md hidden md:inline"
              >
                Sign Up
              </Link>
              <Link
                href="/auth/login"
                className="md:hidden bg-white text-primary hover:bg-[#66bb6a] hover:text-white px-4 py-1.5 rounded-md shadow text-sm font-bold"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="md:hidden bg-[#66bb6a] hover:bg-[#4caf50] text-white text-sm px-4 py-1.5 rounded-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
