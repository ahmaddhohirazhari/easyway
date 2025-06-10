'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [user, setUser] = useState({
    name: '',
    avatar: '',
  });
  // Dummy user login (aktifkan/comment baris sesuai kebutuhan)
  //   setUser({
  //     name: 'John Doe',
  //     avatar: '/logo3.png',
  //   });

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-gray-600 hover:text-[#66bb6a] text-sm">
          <div className="flex items-center space-x-2">
            <Image src="/logo3.png" alt="Logo" width={40} height={40} />
            <span className="text-base font-semibold text-[#66bb6a] font-heading hidden md:inline">
              Easy Way Digital
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-[#66bb6a] text-sm">
            Home
          </a>
          <a
            href="/services"
            className="text-gray-600 hover:text-[#66bb6a] text-sm"
          >
            Services
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-[#66bb6a] text-sm"
          >
            About
          </a>
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
              <a
                href="/auth/login"
                className="text-sm bg-white text-primary hover:bg-[#66bb6a] hover:text-white rounded-md shadow hidden md:inline  px-4 py-1.5 "
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-[#66bb6a] hover:bg-[#4caf50] text-white text-sm px-4 py-1.5 rounded-md hidden md:inline"
              >
                Sign Up
              </a>
              {/* <a
                href="https://wa.me/6285172268408"
                target="_blank"
                rel="noopener noreferrer"
                className=" items-center justify-center w-12 h-12 rounded-full bg-[#66bb6a] hover:bg-[#4caf50] transition-colors hidden md:inline"
                aria-label="Chat via WhatsApp"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a> */}

              {/* Mobile: show only icon */}
              <a
                href="/login"
                className="md:hidden  bg-white text-primary hover:bg-[#66bb6a] hover:text-white px-4 py-1.5 rounded-md  shadow text-sm font-bold "
              >
                Login
              </a>
              <a
                href="/signup"
                className="md:hidden  bg-[#66bb6a] hover:bg-[#4caf50] text-white text-sm px-4 py-1.5 rounded-md  "
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
