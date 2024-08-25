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

  const activitiesData = {
    header: {
      title: t('Activities.header.title'),
      subtitle: t('Activities.header.subtitle'),
      tagline: t('Activities.header.tagline'),
      position: "center" as 'center',
    },
    items: [
      {
        title: t('Activities.items.hikingTrails.title'),
        description: t('Activities.items.hikingTrails.description'),
        icon: CheckCircle,
      },
      {
        title: t('Activities.items.bikeCarRental.title'),
        description: t('Activities.items.bikeCarRental.description'),
        icon: Car,
      },
      {
        title: t('Activities.items.beachCanoeing.title'),
        description: t('Activities.items.beachCanoeing.description'),
        icon: MapPin,
      }
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

  const contentLocatsion = {
    header: {
      title: t('ContentLocation.header.title'),
      subtitle: t('ContentLocation.header.subtitle'),
      tagline: t('ContentLocation.header.tagline')
    },
    content: t('ContentLocation.content'),
    items: [
      {
        title: t('ContentLocation.items.shopProximity.title'),
        description: t('ContentLocation.items.shopProximity.description'),
        icon: Check
      },
      {
        title: t('ContentLocation.items.specialGuests.title'),
        description: t('ContentLocation.items.specialGuests.description'),
        icon: Check
      },
      {
        title: t('ContentLocation.items.riverLocation.title'),
        description: t('ContentLocation.items.riverLocation.description'),
        icon: Check
      }
    ],
    image: {
      src: ImgSkaut,
      alt: t('ContentLocation.imageAlt')
    },
    isReversed: false,
    isAfterContent: false,
    id: "location",
    hasBackground: true
  };


  const natureActivitiesData = {
    header: {
      title: t('NatureActivities.header.title'),
      subtitle: t('NatureActivities.header.subtitle'),
      tagline: t('NatureActivities.header.tagline'),
    },
    content: t('NatureActivities.content'),
    items: [
      {
        title: t('NatureActivities.items.fishing.title'),
        description: t('NatureActivities.items.fishing.description'),
        icon: Check,
      },
      {
        title: t('NatureActivities.items.birdWatching.title'),
        description: t('NatureActivities.items.birdWatching.description'),
        icon: Check,
      },
      {
        title: t('NatureActivities.items.wildlifeObservation.title'),
        description: t('NatureActivities.items.wildlifeObservation.description'),
        icon: Check,
      }
    ],
    image: {
      src: Sommer,
      alt: t('NatureActivities.imageAlt')
    },
    isReversed: false,
    isAfterContent: false,
    id: "nature",
    hasBackground: true
  };


  const peaceComfortData = {
    header: {
      title: t('PeaceComfort.header.title'),
      subtitle: t('PeaceComfort.header.subtitle'),
      tagline: t('PeaceComfort.header.tagline'),
    },
    content: t('PeaceComfort.content'),
    items: [
      {
        title: t('PeaceComfort.items.exceptionalPeace.title'),
        description: t('PeaceComfort.items.exceptionalPeace.description'),
        icon: Check,
      },
      {
        title: t('PeaceComfort.items.multipleActivities.title'),
        description: t('PeaceComfort.items.multipleActivities.description'),
        icon: Check,
      },
      {
        title: t('PeaceComfort.items.variedAccommodation.title'),
        description: t('PeaceComfort.items.variedAccommodation.description'),
        icon: Check,
      },
      {
        title: t('PeaceComfort.items.nearbyAttractions.title'),
        description: t('PeaceComfort.items.nearbyAttractions.description'),
        icon: Check,
      },
      {
        title: t('PeaceComfort.items.goodInternet.title'),
        description: t('PeaceComfort.items.goodInternet.description'),
        icon: Check,
      }
    ],
    image: {
      src: Puhkemaja,
      alt: t('PeaceComfort.imageAlt')
    },
    isReversed: true,
    isAfterContent: false,
    id: "peace",
    hasBackground: true
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
        scrollTargetId="features-section"
        // callToActionLink={t('Hero.callToActionLink')}
        //callToActionLink={scrollToFeatures}
        callToAction2={t('Hero.callToAction2')}
        scrollTargetId2='location'
        //callToActionLink2={t('Hero.callToActionLink2')}
        //callToActionLink2={scrollToActivities}
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

      <Features {...featuresData} id="features-section" />
      <Pricing {...pricingData} />
      <Comparison {...comparisonData} hasBackground={true} />
      <Content {...contentLocatsion} id='location' />
      <Features {...activitiesData} />
      <Content {...natureActivitiesData} />
      <Content {...peaceComfortData} />
    </>
  );
}
