import { MotionConfig, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import type { FooterMeta, NavLink } from '../data/site';
import BrandLogo from './BrandLogo';
import { aeonEase } from './motion';

interface FooterSectionProps {
  directory: NavLink[];
  meta: FooterMeta;
  policies: string[];
}

export default function FooterSection({ directory, meta, policies }: FooterSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.footer
        id="site-footer"
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.85, ease: aeonEase }}
        className="bg-[#141414] border-t border-white/5 py-18 sm:py-22"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,0.95fr)_minmax(0,0.8fr)]">
            <div className="max-w-2xl">
              {/* Wrapped Logo in a Home-Routing Anchor tag */}
              <a href="/" className="block w-[min(100%,22rem)] sm:w-[28rem] transition-opacity duration-300 hover:opacity-80">
                <BrandLogo className="w-full" />
              </a>
              <p className="mt-6 max-w-xl text-[1.1rem] leading-8 text-white/60">
                Ensuring critical infrastructure resilience, backend optimization, and absolute system integrity through rigorous diagnostics and custom engineering development.
              </p>
            </div>

            <div>
              <h3 className="font-display text-[11px] uppercase tracking-[0.26em] text-white/80">Directory</h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {directory.map((item) => (
                  <li key={item.label}>
                    <a className="text-[1.1rem] text-white/60 transition-colors duration-300 hover:text-[#98BF92]" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-[11px] uppercase tracking-[0.26em] text-white/80">Telemetry</h3>
              {/* Upgraded Monospace Tech Manifest Block */}
              <div className="mt-6 font-mono text-base border border-[#98BF92]/20 rounded-md bg-[#0d1117]/60 p-6 text-[#C0C0C0]/80 space-y-3 shadow-inner">
                <div className="text-[#98BF92] font-semibold tracking-wider text-xs uppercase pb-2 border-b border-[#98BF92]/10 mb-3">
                  [NODE_LOG // SYSTEM_INFO]
                </div>
                <p><span className="text-white/40">ORG :</span> MÁS WILD LABS</p>
                <p><span className="text-white/40">LOC :</span> FRESNO, CA // USA</p>
                <p><span className="text-white/40">LAT :</span> 36.7378° N</p>
                <p><span className="text-white/40">LNG :</span> 119.7871° W</p>
                <div className="text-[#98BF92] pt-2 text-xs tracking-widest uppercase flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#98BF92] animate-pulse"></span>
                  CORE_STATUS // ONLINE
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-8 text-[0.95rem] uppercase tracking-[0.08em] text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 MAS WILD LABS. ALL RIGHTS RESERVED.</p>
            <div className="flex flex-wrap gap-6">
              {policies.map((policy) => (
                <span key={policy} className="hover:text-[#98BF92] transition-colors duration-300 cursor-pointer">{policy}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </MotionConfig>
  );
}