import React from 'react';

type BrandLogoKind = 'symbol' | 'wordmark';
type BrandLogoTone = 'dark' | 'light' | 'theme';

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  kind?: BrandLogoKind;
  label?: string;
  tone?: BrandLogoTone;
}

export default function BrandLogo({
  className = '',
  imageClassName = '',
  kind = 'wordmark',
  label = 'MÁS WILD LABS',
  tone = 'theme',
}: BrandLogoProps) {
  return (
    <span
      aria-label={label}
      className={`brand-logo brand-logo-${kind} brand-logo-tone-${tone} inline-block ${className}`.trim()}
      role="img"
    >
      <img
        alt="Más Wild Labs"
        className={`h-24 w-auto object-contain ${imageClassName}`.trim()}
        decoding="async"
        src="/brand/logo2.png"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/brand/logo.png';
        }}
      />
    </span>
  );
}