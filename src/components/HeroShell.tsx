import React from 'react';
import { heroRightNav } from '../data/site';

export default function HeroShell() {
  return (
    <header 
      className="relative w-full overflow-hidden py-8 sm:py-12 border-b border-[#98BF92]/10 flex items-center justify-center min-h-[16rem] md:min-h-[12rem]"
      style={{
        background: 'linear-gradient(to right, #111a24 0%, #121314 30%, #121314 70%, #211c16 100%)'
      }}
    >
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0 relative">
          
          {/* Left Wing Menu Deck (Hardcoded Resume // Docs Anchor) */}
          <nav className="flex items-center justify-between gap-x-12 w-full md:w-[35%] px-4 md:px-0 relative z-20">
            <a 
              href="/resume" 
              className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-[#C0C0C0] hover:text-[#98BF92] transition-colors duration-300 whitespace-nowrap font-medium drop-shadow-md"
            >
              Resume
            </a>
            <a 
              href="/#docs-section" 
              className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-[#C0C0C0] hover:text-[#98BF92] transition-colors duration-300 whitespace-nowrap font-medium drop-shadow-md"
            >
              Docs
            </a>
          </nav>

          {/* Symmetrical Center Brand Hub */}
          <div className="flex h-36 w-36 sm:h-40 sm:w-40 shrink-0 items-center justify-center rounded-full bg-[#121314] p-1.5 shadow-[0_0_50px_rgba(152,191,146,0.12)] border border-[#98BF92]/15 group relative z-30 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-[#98BF92]/5 opacity-100 blur-sm" />
            <img 
              src="/brand/logo2.png" 
              alt="Más Wild Labs Emblem" 
              className="h-full w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/brand/logo.png';
              }}
            />
          </div>

          {/* Right Wing Menu Deck (Projects // About) */}
          <nav className="flex items-center justify-between gap-x-12 w-full md:w-[35%] px-4 md:px-0 relative z-20">
            {heroRightNav.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-[#C0C0C0] hover:text-[#98BF92] transition-colors duration-300 whitespace-nowrap font-medium drop-shadow-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>
      </div>

      <div className="absolute top-4 right-6 z-30 hidden sm:block font-display text-[9px] tracking-[0.3em] text-[#98BF92]/80 uppercase font-medium drop-shadow-[0_0_8px_rgba(152,191,146,0.15)]">
        EST. 2026 // LAB_NODE_01
      </div>
    </header>
  );
}