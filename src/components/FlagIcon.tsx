import React from 'react';
import Image, { StaticImageData } from 'next/image';
import EST from '../assets/images/flags/estonia-flag-button-square-icon-32.png';
import EN from '../assets/images/flags/united-kingdom-flag-button-square-icon-32.png';
import DE from '../assets/images/flags/germany-flag-button-square-icon-32.png';

type FlagIconProps = {
  code: string;
  className?: string;
};

const flagImages: Record<string, StaticImageData> = {
  et: EST, // Estonian flag
  en: EN,  // English flag
  de: DE   // German flag
};

export const FlagIcon: React.FC<FlagIconProps> = ({ code, className }) => {
  const flagSrc = flagImages[code];

  if (!flagSrc) {
    return null;
  }

  return (
    <Image
      src={flagSrc}
      alt={`${code} flag`}
      className={`inline-block w-5 h-5 ${className}`}
      width={20}
      height={20}
    />
  );
};
