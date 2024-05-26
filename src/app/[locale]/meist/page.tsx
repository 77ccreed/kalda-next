import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: { locale: string };
};

export default function MeistPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('MeistPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}