import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
//import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Img from '@/assets/images/taust.jpg';
import Features from '@/components/Features';
import { Home, Building, Bed, Award, Map } from "lucide-react";


type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  const featuresData = {
    header: {
      title: "Our Features",
      subtitle: "Discover the amazing features that make our product unique.",
      tagline: "Features",
      position: "center",
    },
    items: [
      {
        title: "Feature One",
        description: "This is the description for feature one. It explains what the feature is about.",
        icon: Home,
        callToAction: {
          text: "Learn More",
          href: "/feature-one",
          targetBlank: false,
        },
      },
      {
        title: "Feature Two",
        description: "This is the description for feature two. It explains what the feature is about.",
        icon: Building,
        callToAction: {
          text: "Learn More",
          href: "/feature-two",
          targetBlank: false,
        },
      },
      {
        title: "Feature Three",
        description: "This is the description for feature three. It explains what the feature is about.",
        icon: Bed,
        callToAction: {
          text: "Learn More",
          href: "/feature-three",
          targetBlank: false,
        },
      },
    ],
    columns: 3,
  };



  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        tagline={t('tagline')}
        callToAction="Tere"
        callToActionLink="/contact"  // Link for the first CTA button
        callToAction2="Tutvu"
        callToActionLink2="/about"
        image={{
          src: Img.src,
          alt: 'Tere',
          blurDataURL: 'yourBase64EncodedImage'
        }}
      />
      <Features {...featuresData} />

    </>
  );
}