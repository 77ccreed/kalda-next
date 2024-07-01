'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '../navigatsion';
import { FlagIcon } from './FlagIcon';

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

  function onSelectChange() {
    startTransition(() => {
      router.replace(
        { pathname, params },
        { locale: value }
      );
    });
  }

  return (
    <button
      className={clsx(
        'w-full px-4 py-2 text-left transition-colors flex items-center',
        isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary',
        isPending && 'opacity-50 cursor-not-allowed'
      )}
      onClick={onSelectChange}
      disabled={isPending}
    >
      <FlagIcon code={value} className="mr-2" />
      {label}
    </button>
  );
}
