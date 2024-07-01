'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from '../navigatsion';

type Props = {
  value: string;
  label: string;
  isActive: boolean;
};

export default function LocaleSwitcherSelect({
  value,
  label,
  isActive,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button
      className={clsx(
        'block w-full px-4 py-2 text-left transition-colors',
        isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary',
        isPending && 'opacity-50 cursor-not-allowed'
      )}
      onClick={onSelectChange}
      value={value}
      disabled={isPending}
    >
      {label}
    </button>
  );
}
