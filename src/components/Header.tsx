'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 md:px-12 py-4 rounded-xl max-w-7xl mx-auto mt-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="KlipAI Logo" width={75} height={24} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#what" className="hover:text-green-500 transition">What is KlipAI</Link>
          <Link href="#send" className="hover:text-green-500 transition">Send KlapAI</Link>
          <Link href="#agent" className="hover:text-green-500 transition">AI Agent</Link>
          <Link href="#testimonials" className="hover:text-green-500 transition">Testimonials</Link>
          <Link href="#web3" className="hover:text-green-500 transition">Web3</Link>
        </nav>

        {/* Login Button (Desktop Only) */}
        <Link
          href="/login"
          className="hidden md:inline-block bg-green-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-4">
          <Link href="#what" onClick={() => setMobileMenuOpen(false)}>What is KlipAI</Link>
          <Link href="#send" onClick={() => setMobileMenuOpen(false)}>Send KlapAI</Link>
          <Link href="#agent" onClick={() => setMobileMenuOpen(false)}>AI Agent</Link>
          <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
          <Link href="#web3" onClick={() => setMobileMenuOpen(false)}>Web3</Link>

          {/* Login Button for Mobile */}
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-green-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition mt-2 w-max"
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
