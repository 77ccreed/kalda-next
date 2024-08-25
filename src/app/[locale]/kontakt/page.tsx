import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Img from '@/assets/images/taust.jpg';
import Features from '@/components/Features';
import { BedDouble, ShowerHead, Coffee } from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function KontaktPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  const featuresData = {
    header: {
      title: t('Features.header.title'),
      subtitle: t('Features.header.subtitle'),
      tagline: t('Features.header.tagline'),
      position: "center" as 'center',
    },
    items: [
      {
        title: t('Features.items.accommodationOptions.title'),
        description: t('Features.items.accommodationOptions.description'),
        icon: BedDouble,
      },
      {
        title: t('Features.items.washingFacilities.title'),
        description: t('Features.items.washingFacilities.description'),
        icon: ShowerHead,
      },
      {
        title: t('Features.items.breakfast.title'),
        description: t('Features.items.breakfast.description'),
        icon: Coffee,
      }
    ],
    columns: 3,
  };

  return (
    <>
      <Hero
        title="Great companies are made by great people"
        subtitle="Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui."
        tagline="Puhkekeskus"
        callToAction="Tere"
        scrollTargetId="features-section"
        image={{
          src: Img.src,
          alt: 'Tere',
        }}
      />
      <Features {...featuresData} id="features-section" />
    </>
  );
}
