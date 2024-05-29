'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { cn } from '../lib/utils';
import { Link } from '../navigatsion';
import type { AppPathnames } from '../config';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'inline-block px-2 py-3 transition-colors',
        isActive ? 'text-white' : 'text-gray-200 hover:text-accent'
      )}
      href={href}
      {...rest}
    />
  );
}

