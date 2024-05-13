import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
//import PageLayout from '@/components/PageLayout';

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('Meist');

  return (

    <div className="max-w-[490px]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{t('title')}</h1>

      </div>
    </div>

  );
}