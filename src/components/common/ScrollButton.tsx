'use client'; // Mark this as a client component

import React from 'react';
import { Button } from '@/components/ui/button';

type ScrollButtonProps = {
  onClick: () => void;
  label: string;
  variant?: 'secondary' | 'highlight';
};

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick, label, variant = 'secondary' }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      {label}
    </Button>
  );
};

export default ScrollButton;
