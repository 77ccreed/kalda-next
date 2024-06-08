import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Img from '@/assets/images/taust.jpg';

type Props = {
  params: { locale: string };
};

export default function MeistPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('MeistPage');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        tagline={t('tagline')}
        image={{
          src: Img.src,
          alt: 'Tere',
          blurDataURL: 'yourBase64EncodedImage'
        }}
      />
    </>
  );
}