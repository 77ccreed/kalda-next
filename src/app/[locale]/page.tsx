import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
//import Hero from '@/components/Hero';
import Puhkemaja from '@/assets/images/puhkemaja/puhkemaja.jpg';
import Sommer from '@/assets/images/tegevused/sommer.jpg';
import ImgSkaut from '@/assets/images/skaudid/skaudipilt2.jpg';
import Img1 from '@/assets/images/telkimisniit/camp1.jpg';
import Img2 from '@/assets/images/autoelamud/mobile1.jpg';
import Img3 from '@/assets/images/kampingmaja/chouse1_small.jpg';
import Img4 from '@/assets/images/lihtneoomaja/kainestusmaja1_small.jpg';
import Img5 from '@/assets/images/bbtoad/GHroom2a.jpg';
import Img6 from '@/assets/images/puhkemaja/puhkemaja SW.jpg';
import Features from '@/components/Features';
import { BedDouble, ShowerHead, Coffee, Check, CheckCircle, MapPin, Car } from "lucide-react";
import CarouselHero from '@/components/CarouselHero';
import HeroImageGrid from '@/components/HeroImageGrid';
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


  const featuresData2 = {
    header: {
      title: "Maastik ja Matkamine",
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
      title: "Meie majutusvõimalused",
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
        ribbonTitle: "Populaarne",
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
        ribbonTitle: "Populaarne",
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
  return (
    <>
      <HeroImageGrid
        title={t('title')}
        subtitle="Võõrustajad Ulrich ja Heinar tervitavad Teid ning hoolitsevad, et siinviibimine oleks meeldiv. Võid väga kindel olla: Siin ei torgita kedagi tagant. Samas leiad abistava käe seikluste kavandamisel"
        tagline="Puhkekeskus"
        callToAction="Majutus"
        callToActionLink="/contact"
        callToAction2="Teenused"
        callToActionLink2="/about"

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
