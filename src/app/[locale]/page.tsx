import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
//import Hero from '@/components/Hero';
import Img1 from '@/assets/images/telkimisniit/camp1.jpg';
import Img2 from '@/assets/images/autoelamud/mobile1.jpg';
import Img3 from '@/assets/images/kampingmaja/chouse1_small.jpg';
import Img4 from '@/assets/images/lihtneoomaja/kainestusmaja1_small.jpg';
import Img5 from '@/assets/images/bbtoad/GHroom2a.jpg';
import Img6 from '@/assets/images/puhkemaja/puhkemaja SW.jpg';
import Features from '@/components/Features';
import { BedDouble, ShowerHead, Coffee, Check } from "lucide-react";
import CarouselHero from '@/components/CarouselHero';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import Content from '@/components/Content';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  const featuresData = {
    header: {
      title: "Majutus lihtsast luksuslikuni",
      subtitle: "Tere tulemast Kalda Talu Puhkekeskusesse! Siin saate tutvuda meie pakutavate majutusvõimaluste ja teenustega.",
      tagline: "Majutus",
      position: "center" as 'center', // Ensure the type is one of 'left' | 'center' | 'right'
    },
    items: [
      {
        title: "Erinevad majutusvõimalused",
        description: "Pakume mitmesugust majutust: alates väga lihtsast vähenõudlikule inimesele, kuni mugava ja luksuslikuni. Vali endale sobiv.",
        icon: BedDouble,
        callToAction: {
          text: "Learn More",
          href: "/feature-one",
          targetBlank: false,
        },
      },
      {
        title: "Pesemisvõimalused",
        description: "Kui broneerite privaatse ruumi või voodi hostelis on ka jagatud duširuum hinna sees. Muude majutusviiside korral lisandub väike tasu.",
        icon: ShowerHead,
        callToAction: {
          text: "Learn More",
          href: "/feature-two",
          targetBlank: false,
        },
      },
      {
        title: "Hommikusöök",
        description: "Me ei valmista sooja sööki. Privaat-tubade külalistele serveerime rikkaliku külma hommikusöögi, kõikides jagatud tubades on kohvi ja tee valmistamise võimalus. Samuti on olemas külmkapp.",
        icon: Coffee,
        callToAction: {
          text: "Learn More",
          href: "/feature-three",
          targetBlank: false,
        },
      },
    ],
    columns: 3,
  };

  /* const pricingData = {
     header: {
       title: "Meie Majutusvõimalused",
       subtitle: "Vali endale sobiv peatuspaik.",
       tagline: "Hinnakiri"
     },
     prices: [
       {
         title: "Telkimisala",
         subtitle: "Looduse armastajatele",
         price: "6€",
         period: "öö kohta inimesele",
         items: ["Ruum kuni 400 inimesele", "Lõkkease", "Lipuvarras skautidele", "Väliköök pliidiga"],
         callToAction: {
           text: "Broneeri nüüd",
           href: "/broneerimine/telkimisala",
           targetBlank: false
         },
         image: {
           src: Img1,
           alt: "Telkimisala"
         }
       },
       {
         title: "Karavanid ja autoelamud",
         subtitle: "Mugavus looduses",
         price: "12€",
         period: "öö kohta inimesele",
         items: ["4 parkimiskohta elektriga", "Ruum rohkematele karavanidele", "Saadaval vesi ja gaas", "Tualeti tühjendamise võimalus"],
         callToAction: {
           text: "Broneeri nüüd",
           href: "/broneerimine/karavanid-autoelamud",
           targetBlank: false
         },
         image: {
           src: Img2,
           alt: "Karavanid ja autoelamud"
         }
       },
       {
         title: "Kämpingumajad",
         subtitle: "Hubane ja mugav",
         price: "24€ - 72€",
         period: "öö kohta",
         items: ["Küttega kämpingud", "Kaheinimesevoodi ja narivoodi", "Kohvimasin ja lauanõud", "Külma veega pesemine kraanikausis"],
         callToAction: {
           text: "Broneeri nüüd",
           href: "/broneerimine/kampingumajad",
           targetBlank: false
         },
         hasRibbon: true,
         ribbonTitle: "Populaarne suvel",
         image: {
           src: Img3,
           alt: "Kämpingumajad"
         }
       },
       {
         title: "Hostel",
         subtitle: "Lihtne ja taskukohane",
         price: "17€ - 19€",
         period: "öö kohta",
         items: ["Jagatud toad", "Täiendavad mugavused privaatseks kasutamiseks", "Koridori dushid", "Ligipääsetav aastaringselt"],
         callToAction: {
           text: "Broneeri nüüd",
           href: "/broneerimine/hostel",
           targetBlank: false
         },
         image: {
           src: Img4,
           alt: "Hostel"
         }
       },
       {
         title: "Kodumajutuse toad",
         subtitle: "Kodu mugavus",
         price: "29€ - 60€",
         period: "öö kohta",
         items: ["Toad kaheinimesevooditega", "Minibaar ja õhukonditsioneer", "Rikkalik hommikusöök hinna sees", "Jagatud vannitoa mugavused"],
         callToAction: {
           text: "Broneeri nüüd",
           href: "/broneerimine/kodumajutuse-toad",
           targetBlank: false
         },
         hasRibbon: true,
         ribbonTitle: "Populaarne talvel",
         image: {
           src: Img5,
           alt: "Kodumajutuse toad"
         }
       },
       {
         title: "Puhkemaja",
         subtitle: "Ideaalne peredele",
         price: "540€ - 650€",
         period: "nelja öö või nädala kohta",
         items: ["Maja kuni 6 inimesele", "Elutuba kaminaga", "Täielikult varustatud köök", "Saun ja vannituba"],
         callToAction: {
           text: "Broneeri nüüd",
           href: "/broneerimine/puhkemaja",
           targetBlank: false
         },
         image: {
           src: Img6,
           alt: "Puhkemaja"
         }
       }
     ]
   };*/

  const pricingData = {
    header: {
      title: "Meie Majutusvõimalused",
      subtitle: "Vali endale sobiv peatuspaik.",
      tagline: "Hinnakiri"
    },
    prices: [
      {
        title: "Telkimisala",
        subtitle: "Looduse armastajatele",
        price: "6€",
        period: "öö kohta inimesele",
        items: ["Ruum kuni 400 inimesele", "Lõkkease", "Lipuvarras skautidele", "Väliköök pliidiga"],
        callToAction: {
          text: "Broneeri nüüd",
          href: "/broneerimine/telkimisala",
          targetBlank: false
        },
        callToAction2: {
          text: "Loe rohkem",
          href: "/telkimisala",
          targetBlank: false
        },
        hasRibbon: true,
        ribbonTitle: "Populaarne",
        image: {
          src: Img1,
          alt: "Telkimisala"
        }
      },
      {
        title: "Karavanid ja autoelamud",
        subtitle: "Mugavus looduses",
        price: "12€",
        period: "öö kohta inimesele",
        items: ["4 parkimiskohta elektriga", "Ruum rohkematele karavanidele", "Saadaval vesi ja gaas", "Tualeti tühjendamise võimalus"],
        callToAction: {
          text: "Broneeri nüüd",
          href: "/broneerimine/karavanid-autoelamud",
          targetBlank: false
        },
        callToAction2: {
          text: "Loe rohkem",
          href: "/karavanid-autoelamud",
          targetBlank: false
        },
        image: {
          src: Img2,
          alt: "Karavanid ja autoelamud"
        }
      },
      {
        title: "Kämpingumajad",
        subtitle: "Hubane ja mugav",
        price: "24€ - 72€",
        period: "öö kohta",
        items: ["Küttega kämpingud", "Kaheinimesevoodi ja narivoodi", "Kohvimasin ja lauanõud", "Külma veega pesemine kraanikausis"],
        callToAction: {
          text: "Broneeri nüüd",
          href: "/broneerimine/kampingumajad",
          targetBlank: false
        },
        callToAction2: {
          text: "Loe rohkem",
          href: "/kampingumajad",
          targetBlank: false
        },
        hasRibbon: true,
        ribbonTitle: "Populaarne suvel",
        image: {
          src: Img3,
          alt: "Kämpingumajad"
        }
      },
      {
        title: "Hostel",
        subtitle: "Lihtne ja taskukohane",
        price: "17€ - 19€",
        period: "öö kohta",
        items: ["Jagatud toad", "Täiendavad mugavused privaatseks kasutamiseks", "Koridori dushid", "Ligipääsetav aastaringselt"],
        callToAction: {
          text: "Broneeri nüüd",
          href: "/broneerimine/hostel",
          targetBlank: false
        },
        callToAction2: {
          text: "Loe rohkem",
          href: "/hostel",
          targetBlank: false
        },
        image: {
          src: Img4,
          alt: "Hostel"
        }
      },
      {
        title: "Kodumajutuse toad",
        subtitle: "Kodu mugavus",
        price: "29€ - 60€",
        period: "öö kohta",
        items: ["Toad kaheinimesevooditega", "Minibaar ja õhukonditsioneer", "Rikkalik hommikusöök hinna sees", "Jagatud vannitoa mugavused"],
        callToAction: {
          text: "Broneeri nüüd",
          href: "/broneerimine/kodumajutuse-toad",
          targetBlank: false
        },
        callToAction2: {
          text: "Loe rohkem",
          href: "/kodumajutuse-toad",
          targetBlank: false
        },
        hasRibbon: true,
        ribbonTitle: "Populaarne talvel",
        image: {
          src: Img5,
          alt: "Kodumajutuse toad"
        }
      },
      {
        title: "Puhkemaja",
        subtitle: "Ideaalne peredele",
        price: "540€ - 650€",
        period: "nelja öö või nädala kohta",
        items: ["Maja kuni 6 inimesele", "Elutuba kaminaga", "Täielikult varustatud köök", "Saun ja vannituba"],
        callToAction: {
          text: "Broneeri nüüd",
          href: "/broneerimine/puhkemaja",
          targetBlank: false
        },
        callToAction2: {
          text: "Loe rohkem",
          href: "/puhkemaja",
          targetBlank: false
        },
        image: {
          src: Img6,
          alt: "Puhkemaja"
        }
      }

    ]
  };



  const comparisonData = {
    header: {
      title: "Compare Accommodation Options",
      subtitle: "See what each option has to offer.",
      tagline: "Comparison Table"
    },
    columns: [
      {
        title: "Features",
        items: [
          "Bedding",
          "Towel",
          "Washing Facilities",
          "Shower",
          "Breakfast",
          "Cooking Facilities",
          "Heating"
        ]
      },
      {
        title: "Camping",
        items: [
          "✗",
          "✗",
          "Washing area / sink",
          "2€",
          "✗",
          "Outdoor kitchen with fridge",
          "✗"
        ],
        callToAction: {
          text: "Book Camping",
          href: "/booking/camping",
          targetBlank: false
        }
      },
      {
        title: "Hostel",
        items: [
          "Included in summer, rentable in winter",
          "Rentable",
          "Shower, toilet, and bidet in summer. Washing area in nearby building in winter.",
          "Free in summer, 2€ in winter",
          "Utensils and dishes, coffee machine, stove, kettle",
          "Outdoor kitchen with fridge, small kitchen",
          "✓"
        ],
        callToAction: {
          text: "Book Hostel",
          href: "/booking/hostel",
          targetBlank: false
        }
      },
      {
        title: "Camping Cabin",
        items: [
          "✓",
          "Rentable",
          "Washing area in nearby building",
          "✓",
          "Utensils and dishes, coffee machine, kettle",
          "Outdoor kitchen with fridge",
          "✓"
        ],
        callToAction: {
          text: "Book Cabin",
          href: "/booking/camping-cabin",
          targetBlank: false
        }
      },
      {
        title: "Room",
        items: [
          "✓",
          "✓",
          "Sink in room, toilet and shower in corridor",
          "✓",
          "Kitchen and fridge, minibar in room",
          "✓",
          "✓"
        ],
        callToAction: {
          text: "Book Room",
          href: "/booking/room",
          targetBlank: false
        }
      }
    ]
  };

  const contentData = {
    header: {
      title: "Discover Our Features",
      subtitle: "Learn more about what we offer.",
      tagline: "Features"
    },
    content: "Welcome to our nature retreat, where you can enjoy various activities and comfortable accommodations.",
    items: [
      {
        title: "Comfortable Rooms",
        description: "Our rooms are designed for your comfort with all necessary amenities.",
        icon: Check
      },
      {
        title: "Scenic Views",
        description: "Enjoy breathtaking views from your room.",
        icon: Check
      },
      {
        title: "Activities",
        description: "Engage in various outdoor activities like hiking, cycling, and more.",
        icon: Check
      }
    ],
    image: {
      src: Img1,
      alt: "Scenic view"
    },
    isReversed: false,
    isAfterContent: false,
    id: "features",
    hasBackground: true
  };



  return (
    <>
      <CarouselHero
        title={t('title')}
        subtitle="Võõrustajad Ulrich ja Heinar tervitavad Teid ning hoolitsevad, et siinviibimine oleks meeldiv. Võid väga kindel olla: Siin ei torgita kedagi tagant. Samas leiad abistava käe seikluste kavandamisel"
        tagline="Puhkekeskus"
        callToAction="Majutus"
        callToActionLink="/contact"
        callToAction2="Teenused"
        callToActionLink2="/about"
        images={[
          { src: Img6.src, alt: 'Tere', width: 600, height: 400 },
          { src: Img5.src, alt: 'Tere', width: 600, height: 400 },
          { src: Img4.src, alt: 'Tere', width: 600, height: 400 },
          { src: Img3.src, alt: 'Tere', width: 600, height: 400 },
          { src: Img2.src, alt: 'Tere', width: 600, height: 400 },
          { src: Img1.src, alt: 'Tere', width: 600, height: 400 }
        ]}
      />
      <Features {...featuresData} />
      <Pricing {...pricingData} />
      <Comparison {...comparisonData} hasBackground={true} />
      <Content {...contentData} />
    </>
  );
}
