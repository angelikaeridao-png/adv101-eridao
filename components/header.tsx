'use client';

import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  logoSrc?: string;
  logoText?: string;
}

export default function Header({
  logoSrc = 'https://uploads.onecompiler.io/43zvj4fst/1790341986589/hcdc_logo.png',
  logoText = 'HCDC',
}: HeaderProps) {
  return (
    <header className="relative z-20 w-full max-w-7xl mx-auto px-8 py-8 flex items-center justify-between border-b border-white/10">

      <Link href="/" className="flex items-center cursor-pointer">
        <img
          src={logoSrc}
          alt="HCDC Logo"
          className="w-10 h-10 object-contain"
        />
      </Link>

      <nav className="flex items-center space-x-8 text-xs uppercase tracking-[0.25em] font-light text-neutral-300">
        <Link href="/about">
          About
        </Link>
        <Link href="/projects">
          Projects
        </Link>
        <Link href="/portfolio">
          Portfolio
        </Link>
        <Link href="/gallery">
          Gallery
        </Link>
      </nav>
    </header>
  );
}
