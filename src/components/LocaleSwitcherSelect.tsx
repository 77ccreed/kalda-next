'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition, MouseEvent } from 'react';
import { useRouter, usePathname } from '../navigatsion';
import { FlagIcon } from './FlagIcon';

type Props = {
  value: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  value,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: MouseEvent<HTMLButtonElement>) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button
      className={clsx(
        'w-full px-4 py-2 text-left transition-colors flex items-center',
        isPending ? 'opacity-50 cursor-not-allowed' : 'text-white hover:text-primary'
      )}
      onClick={onSelectChange}
      disabled={isPending}
    >
      <FlagIcon code={value} className="mr-2" />
      {label}
    </button>
  );
}