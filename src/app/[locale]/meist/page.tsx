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
        title="Great companies are made by great people"
        subtitle="Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui."
        tagline="Puhkekeskus"
        callToAction="Tere"
        callToActionLink="/contact"  // Link for the first CTA button
        callToAction2="Tutvu"
        callToActionLink2="/about"   // Link for the second CTA button
        image={{
          src: Img.src,
          alt: 'Tere',
          blurDataURL: 'yourBase64EncodedImage'
        }}
      />
    </>
  );
}