import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
//import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Img from '@/assets/images/kampingmaja/chouse1_small.jpg';
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
      title: "Info ja teenused",
      subtitle: "Tere tulemast Kalda Talu Puhkekeskusesse! Siin saate tutvuda meie pakutavate majutusvõimaluste ja teenustega.",
      tagline: "Info",
      position: "center",
    },
    items: [
      {
        title: "Erinevad majutusvõimalused",
        description: "Pakume mitmesugust majutust: alates väga lihtsast vähenõudlikule inimesele, kuni mugava ja luksuslikuni. Vali endale sobiv.",
        icon: Home,
        callToAction: {
          text: "Learn More",
          href: "/feature-one",
          targetBlank: false,
        },
      },
      {
        title: "Pesemisvõimalused",
        description: "Kui broneerite privaatse ruumi või voodi hostelis on ka jagatud duširuum hinna sees. Muude majutusviiside korral lisandub väike tasu.",
        icon: Building,
        callToAction: {
          text: "Learn More",
          href: "/feature-two",
          targetBlank: false,
        },
      },
      {
        title: "Hommikusöök",
        description: "Me ei valmista sooja sööki. Privaat-tubade külalistele serveerime rikkaliku külma hommikusöögi, kõikides jagatud tubades on kohvi ja tee valmistamise võimalus. Samuti on olemas külmkapp.",
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