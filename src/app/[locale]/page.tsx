import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Puhkemaja from '@/assets/images/puhkemaja/puhkemaja.jpg';
import Sommer from '@/assets/images/tegevused/sommer.jpg';
import ImgSkaut from '@/assets/images/skaudid/skaudipilt2.jpg';
import Img1 from '@/assets/images/telkimisniit/camp1.jpg';
import Img2 from '@/assets/images/autoelamud/mobile1.jpg';
import Img3 from '@/assets/images/kampingmaja/chouse1_small.jpg';
import Img4 from '@/assets/images/lihtneoomaja/kainestusmaja1_small.jpg';
import Img5 from '@/assets/images/bbtoad/GHroom2a.jpg';
import Img6 from '@/assets/images/puhkemaja/puhkemaja SW.jpg';
import Ulrich from '@/assets/images/host/ulrich.jpg';
import Heinar from '@/assets/images/host/heinar.jpg';
import Features from '@/components/Features';
import { BedDouble, ShowerHead, Coffee, Check, CheckCircle, MapPin, Car, Mail, Phone } from "lucide-react";
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import Content from '@/components/Content';
import Img from '@/assets/images/taust.jpg';
import Team from '@/components/Team';
import { SiFacebook, SiTripadvisor } from 'react-icons/si';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
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

  const featuresData2 = {
    header: {
      title: "Maastik ja matkamine",
      subtitle: "Kalda Talu ümbruskonnas leidub hulgaliselt võimalusi aktiivseks puhkuseks ning looduse avastamiseks aastaringselt. Jalutamine, jooksmine, rattasõit, ujumine. Talvel suusatamine ja uisutamine. Näiteks pole tõenäoliselt igaüks näinud veel kopratammi.",
      tagline: "Tegevused ja Huviväärsused",
      position: "center" as 'center',
    },
    items: [
      {
        title: "Matkarajad",
        description: "RMK matkarajad, mis pakuvad võimalusi lihtsatest lühikestest kõnnakutest kuni nõudlikumate matkade ja ööbimisvõimalusteni.",
        icon: CheckCircle,
      },
      {
        title: "Ratta ja Auto Rent",
        description: "Rentige meilt jalgratas või auto, et uurida maakonna kaugemaid paiku või põigata Lätti.",
        icon: Car,
      },
      {
        title: "Rand ja Kanuuretked",
        description: "Rand on 6 km kaugusel. Väike Emajõgi sobib kanuuretke alguspunktiks. Mitmepäevased ekskursioonid Koiva ja teiste jõgede vahel.",
        icon: MapPin,
      },
    ],
    columns: 3,
  };



  const pricingData = {
    header: {
      title: t('Pricing.header.title'),
      subtitle: t('Pricing.header.subtitle'),
      tagline: t('Pricing.header.tagline')
    },
    prices: [
      {
        title: t('Pricing.prices.camping.title'),
        subtitle: t('Pricing.prices.camping.subtitle'),
        price: "6€",
        period: t('Pricing.prices.camping.period'),
        items: [
          t('Pricing.prices.camping.items.0'),
          t('Pricing.prices.camping.items.1'),
          t('Pricing.prices.camping.items.2'),
          t('Pricing.prices.camping.items.3'),
        ],
        callToAction: {
          text: t('Pricing.common.readMore'),
          href: t('Pricing.prices.camping.readMoreHref'),
          targetBlank: false
        },
        callToAction2: {
          text: t('Pricing.common.bookNow'),
          href: t('Pricing.common.bookNowHref'),
          targetBlank: false
        },
        image: {
          src: Img1,
          alt: t('Pricing.prices.camping.imageAlt')
        }
      },
      {
        title: t('Pricing.prices.caravans.title'),
        subtitle: t('Pricing.prices.caravans.subtitle'),
        price: "12€",
        period: t('Pricing.prices.caravans.period'),
        items: [
          t('Pricing.prices.caravans.items.0'),
          t('Pricing.prices.caravans.items.1'),
          t('Pricing.prices.caravans.items.2'),
          t('Pricing.prices.caravans.items.3'),
        ],
        callToAction: {
          text: t('Pricing.common.readMore'),
          href: t('Pricing.prices.caravans.readMoreHref'),
          targetBlank: false
        },
        callToAction2: {
          text: t('Pricing.common.bookNow'),
          href: t('Pricing.common.bookNowHref'),
          targetBlank: false
        },
        image: {
          src: Img2,
          alt: t('Pricing.prices.caravans.imageAlt')
        }
      },
      {
        title: t('Pricing.prices.cabins.title'),
        subtitle: t('Pricing.prices.cabins.subtitle'),
        price: "24€ - 72€",
        period: t('Pricing.prices.cabins.period'),
        items: [
          t('Pricing.prices.cabins.items.0'),
          t('Pricing.prices.cabins.items.1'),
          t('Pricing.prices.cabins.items.2'),
          t('Pricing.prices.cabins.items.3'),
        ],
        callToAction: {
          text: t('Pricing.common.readMore'),
          href: t('Pricing.prices.cabins.readMoreHref'),
          targetBlank: false
        },
        callToAction2: {
          text: t('Pricing.common.bookNow'),
          href: t('Pricing.common.bookNowHref'),
          targetBlank: false
        },
        hasRibbon: true,
        ribbonTitle: t('Pricing.prices.cabins.ribbonTitle'),
        image: {
          src: Img3,
          alt: t('Pricing.prices.cabins.imageAlt')
        }
      },
      {
        title: t('Pricing.prices.hostel.title'),
        subtitle: t('Pricing.prices.hostel.subtitle'),
        price: "17€ - 19€",
        period: t('Pricing.prices.hostel.period'),
        items: [
          t('Pricing.prices.hostel.items.0'),
          t('Pricing.prices.hostel.items.1'),
          t('Pricing.prices.hostel.items.2'),
          t('Pricing.prices.hostel.items.3'),
        ],
        callToAction: {
          text: t('Pricing.common.readMore'),
          href: t('Pricing.prices.hostel.readMoreHref'),
          targetBlank: false
        },
        callToAction2: {
          text: t('Pricing.common.bookNow'),
          href: t('Pricing.common.bookNowHref'),
          targetBlank: false
        },
        image: {
          src: Img4,
          alt: t('Pricing.prices.hostel.imageAlt')
        }
      },
      {
        title: t('Pricing.prices.guestRooms.title'),
        subtitle: t('Pricing.prices.guestRooms.subtitle'),
        price: "29€ - 60€",
        period: t('Pricing.prices.guestRooms.period'),
        items: [
          t('Pricing.prices.guestRooms.items.0'),
          t('Pricing.prices.guestRooms.items.1'),
          t('Pricing.prices.guestRooms.items.2'),
          t('Pricing.prices.guestRooms.items.3'),
        ],
        callToAction: {
          text: t('Pricing.common.readMore'),
          href: t('Pricing.prices.guestRooms.readMoreHref'),
          targetBlank: false
        },
        callToAction2: {
          text: t('Pricing.common.bookNow'),
          href: t('Pricing.common.bookNowHref'),
          targetBlank: false
        },
        hasRibbon: true,
        ribbonTitle: t('Pricing.prices.guestRooms.ribbonTitle'),
        image: {
          src: Img5,
          alt: t('Pricing.prices.guestRooms.imageAlt')
        }
      },
      {
        title: t('Pricing.prices.holidayHouse.title'),
        subtitle: t('Pricing.prices.holidayHouse.subtitle'),
        price: "540€ - 650€",
        period: t('Pricing.prices.holidayHouse.period'),
        items: [
          t('Pricing.prices.holidayHouse.items.0'),
          t('Pricing.prices.holidayHouse.items.1'),
          t('Pricing.prices.holidayHouse.items.2'),
          t('Pricing.prices.holidayHouse.items.3'),
        ],
        callToAction: {
          text: t('Pricing.common.readMore'),
          href: t('Pricing.prices.holidayHouse.readMoreHref'),
          targetBlank: false
        },
        callToAction2: {
          text: t('Pricing.common.bookNow'),
          href: t('Pricing.common.bookNowHref'),
          targetBlank: false
        },
        image: {
          src: Img6,
          alt: t('Pricing.prices.holidayHouse.imageAlt')
        }
      }
    ]
  };


  const comparisonData = {
    header: {
      title: t('Comparison.header.title'),
      subtitle: t('Comparison.header.subtitle'),
      tagline: t('Comparison.header.tagline')
    },
    columns: [
      {
        title: t('Comparison.columns.features.title'),
        items: [
          t('Comparison.columns.features.items.0'),
          t('Comparison.columns.features.items.1'),
          t('Comparison.columns.features.items.2'),
          t('Comparison.columns.features.items.3'),
          t('Comparison.columns.features.items.4'),
          t('Comparison.columns.features.items.5'),
          t('Comparison.columns.features.items.6')
        ]
      },
      {
        title: t('Comparison.columns.camping.title'),
        items: [
          "✗",
          "✗",
          t('Comparison.columns.camping.items.0'),
          t('Comparison.columns.camping.items.1'),
          "✗",
          t('Comparison.columns.camping.items.2'),
          "✗"
        ]
      },
      {
        title: t('Comparison.columns.hostel.title'),
        items: [
          t('Comparison.columns.hostel.items.0'),
          t('Comparison.columns.hostel.items.1'),
          t('Comparison.columns.hostel.items.2'),
          t('Comparison.columns.hostel.items.3'),
          t('Comparison.columns.hostel.items.4'),
          t('Comparison.columns.hostel.items.5'),
          "✓"
        ]
      },
      {
        title: t('Comparison.columns.campingCabin.title'),
        items: [
          "✓",
          t('Comparison.columns.campingCabin.items.0'),
          t('Comparison.columns.campingCabin.items.1'),
          "✓",
          t('Comparison.columns.campingCabin.items.2'),
          t('Comparison.columns.campingCabin.items.3'),
          "✓"
        ]
      },
      {
        title: t('Comparison.columns.room.title'),
        items: [
          "✓",
          "✓",
          t('Comparison.columns.room.items.0'),
          "✓",
          t('Comparison.columns.room.items.1'),
          "✓",
          "✓"
        ]
      }
    ]
  };

  const contentData = {
    header: {
      title: "Kalda Talu Iigastes",
      subtitle: "Kalda talu Iigastes asub 20 kilomeetri kaugusel Valgast kirdes. Iigaste küla kuulub Valga valda. Lähim keskus on Laatre 6 km kaugusel.",
      tagline: "Asukoht"
    },
    content: "Tegemist on metsadest ümbritsetud põllumajanduspiirkonnaga. Kirdesse jäävad spordiga seotud Otepää alad, lõunasse Karula rahvuspark metsaste mägede ning paljude väikeste järvedega.",
    items: [
      {
        title: "Lähimad poed",
        description: "Lähemal asuvad toitupoed on Tsirguliinas 10 km kaugusel ja Sangastes 13 km kaugusel. Mitmed suuremad kaubanduskeskused asuvad Valgas.",
        icon: Check
      },
      {
        title: "Erilised külalised",
        description: "Eriti oodatakse Kalda talus skaute ja gaide.",
        icon: Check
      },
      {
        title: "Väikese Emajõe kaldal",
        description: "Kalda talu asub Väikese Emajõe kaldal.",
        icon: Check
      }
    ],
    image: {
      src: ImgSkaut,
      alt: "Skaudid söömas",
    },
    isReversed: false,
    isAfterContent: false,
    id: "location",
    hasBackground: true
  };

  const contentData2 = {
    header: {
      title: "Kalda talu asub Väikese Emajõe kaldal",
      subtitle: "Jõgi, mis suubub Võrtsjärve ning edasi Peipsisse ja kasvab oma teel üha suuremaks. Talu läheduses ühineb Väikese Emajõega Ärnu jõgi - koht kus kalameestel on tegemist.",
      tagline: "Jõgi ja Loodus",
    },
    content: "Ka linnuvaatlejatele jagub imetlemist. Tänu rahulikule paigale ja suurtele osalt niisketele metsadele satub siin silma mitmeid liike, keda muidu vaevalt kohtab. Metsloomi võib jõe ääres joomas näha.",
    items: [
      {
        title: "Kalapüük",
        description: "Talu läheduses ühineb Väikese Emajõega Ärnu jõgi - koht kus kalameestel on tegemist.",
        icon: Check,
      },
      {
        title: "Linnuvaatlus",
        description: "Rahulik paik ja suured metsad pakuvad imetlemist linnuvaatlejatele.",
        icon: Check,
      },
      {
        title: "Metsloomade vaatlemine",
        description: "Metsloomi võib jõe ääres joomas näha.",
        icon: Check,
      },
    ],
    image: {
      src: Sommer,
      alt: "Loodus",
    },
    isReversed: false,
    isAfterContent: false,
    id: "nature",
    hasBackground: true,
  };

  const contentData3 = {
    header: {
      title: "Talus on vaikne, kuna maja on teeotsas viimane",
      subtitle: "Saab sõita rattaga ning matkata teedel, kuhu mootorsõidukid harva satuvad. Talus on piisavalt ruumi korraga mitmetele külaliste gruppidele.",
      tagline: "Talu Rahu ja Mugavused",
    },
    content: "Telkimisplats, kämpingumajakesed ja suuremad majutusruumid on seatud nõnda, et külastajad üksteist ei häiriks. Lisaks Valga/Valka linnale on läheduses uudistamiseks rukkikrahv Bergi Sangaste loss, muuseum ja park, Pokumaa, Antsla ning Karula rahvuspargi vaatamisväärsused. Eestis on hästi levinud Internetiühendus. Nii saab ka siin talus traadita võrgu kaudu uudistele kaasa elada.",
    items: [
      {
        title: "Erakordne rahu",
        description: "Talu on viimane maja teeotsas, pakkudes vaikust ja rahu.",
        icon: Check,
      },
      {
        title: "Mitmed tegevused",
        description: "Rattasõit ja matkad teedel, kuhu mootorsõidukid harva satuvad.",
        icon: Check,
      },
      {
        title: "Erinevad majutusvõimalused",
        description: "Telkimisplats, kämpingumajakesed ja suuremad majutusruumid.",
        icon: Check,
      },
      {
        title: "Lähedal asuvad vaatamisväärsused",
        description: "Rukkikrahv Bergi Sangaste loss, Pokumaa, Antsla, Karula rahvuspark.",
        icon: Check,
      },
      {
        title: "Hea Internetiühendus",
        description: "Eestis on hästi levinud Internetiühendus, saadaval ka talus.",
        icon: Check,
      },
    ],
    image: {
      src: Puhkemaja,
      alt: "Talu",
    },
    isReversed: true,
    isAfterContent: false,
    id: "peace",
    hasBackground: true,
  };

  const teamMembers = [
    {
      name: 'Ulrich Altenkirch',
      occupation: t('Team.members.ulrichOccupation'),
      image: { src: Ulrich.src, alt: 'Ulrich Altenkirch' },

      items: [
        { title: 'Phone', href: 'tel:+3721234567', icon: Phone },
        { title: 'Email', href: 'mailto:kalda@mail.ee', icon: Mail },
        { title: 'Facebook', href: 'https://www.facebook.com/kaldatalu', icon: SiFacebook }
      ]
    },
    {
      name: 'Heinar Kroon',
      occupation: t('Team.members.heinarOccupation'),
      image: { src: Heinar.src, alt: 'Heinar Kroon' },

      items: [
        { title: 'Phone', href: 'tel:+3727654321', icon: Phone },
        { title: 'Email', href: 'mailto:tere@gmail.com', icon: Mail },
        { title: 'Facebook', href: 'https://www.facebook.com/kaldatalu', icon: SiFacebook }
      ]
    }
  ];


  return (
    <>
      <Hero
        title={t('Hero.title')}
        subtitle={t('Hero.subtitle')}
        tagline={t('Hero.tagline')}
        callToAction={t('Hero.callToAction')}
        callToActionLink={t('Hero.callToActionLink')}
        callToAction2={t('Hero.callToAction2')}
        callToActionLink2={t('Hero.callToActionLink2')}
        image={{
          src: Img.src,
          alt: t('Hero.imageAlt'),
        }}
      />
      <Team
        header={{
          title: t('Team.header.title'),
          subtitle: t('Team.header.subtitle'),
          tagline: t('Team.header.tagline'),
        }}
        teams={teamMembers}
        hasBackground={true}
      />
      <Features {...featuresData} />
      <Pricing {...pricingData} />
      <Comparison {...comparisonData} hasBackground={true} />
      <Content {...contentData} />
      <Features {...featuresData2} />
      <Content {...contentData2} />
      <Content {...contentData3} />
    </>
  );
}
