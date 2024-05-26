"use client";

import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import { SiFacebook, SiTripadvisor } from 'react-icons/si';
import { Home, Building, Bed, Award, Map } from "lucide-react";
import NavigationLink from "./NavigationLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type NavigationLinkProps = {
  href: string;
  key: string;
};

const contactInformation = [
  { type: "address", value: "Kalda talu, ligaste küla, Valga vald, 68308 Valgamaa" },
  { type: "email", value: "puhkekeskus@msn.com" },
  { type: "phone", value: "+37256652061", language: "eesti ja vene keeles" },
  { type: "phone", value: "+37255594776", language: "inglise, saksa keeles" },
  { type: "bankAccount", value: "Ulrich Altenkirch" },
  { type: "bankAccount", value: "Swedbank: EE96 2200 0011 0844 3461" },
  { type: "bankAccount", value: "SEB: EE45 1010 0108 4154 4019" },
];

// Define the navigation links
const navigationLinks: NavigationLinkProps[] = [
  { href: "/meist", key: "meist" },
  { href: "/majutuse-tüübid/hostel", key: "hostel" },
  { href: "/majutuse-tüübid/kodumajutuse-toad", key: "kodumajutuseToad" },
  { href: "/majutuse-tüübid/puhkemaja", key: "puhkemaja" },
  { href: "/majutuse-tüübid/kampingmajad", key: "kampingmajad" },
  { href: "/majutuse-tüübid/karavanid-ja-autoelamud", key: "karavanidJaAutoelamud" },
  { href: "/majutuse-tüübid/telkimisala", key: "telkimisala" },
  { href: "/hinnakiri", key: "hinnakiri" },
  { href: "/teenused-ja-aktiivne-puhkus/kanuurent", key: "kanuurent" },
  { href: "/teenused-ja-aktiivne-puhkus/sündmuste-korraldamine", key: "sündmusteKorraldamine" },
  { href: "/teenused-ja-aktiivne-puhkus/saun", key: "saun" },
  { href: "/kontakt", key: "kontakt" },
];

// Define the social media links
const socialMediaLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: SiFacebook },
  { href: "https://tripadvisor.com", label: "TripAdvisor", Icon: SiTripadvisor },
  { href: "https://booking.com", label: "Booking.com", Icon: Home },
  { href: "https://hotel.de", label: "Hotel.de", Icon: Building },
  { href: "https://hostelworld.com", label: "Hostelworld", Icon: Bed },
  { href: "#", label: "Travelmyth Award", Icon: Award },
  { href: "#", label: "Spotocamp", Icon: Map },
];

export default function Footer() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const getLinkClassName = (href: string) => (
    `hover:text-accent ${pathname === href ? 'text-accent font-semibold' : ''}`
  );

  return (
    <TooltipProvider>
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bränding */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold mb-4">KALDA TALU VALGAMAAL</h2>
            <p className="mb-2">ULRICH ALTENKIRCH FIE (reg. kood: 11045862), KMKR nr: EE101238140</p>
            <p className="mb-4">GPS koordinaadid: 57.83022 = 57° 49' 48'' põhjalaust, 26.27867 = 26° 16' 43'' idapikkust</p>
            <p className="text-sm">Majutus kauni looduse keskel Valgamaal ligastes. Peatumine lihtsalt sisustatud jagatud vannitoaga ühe- ja kahe inimese toas või puhkemajas. Auto-, kanuu- ja rattarent. Tasuta WIFI ja parkimine. Soovi korral hommikusöök rootsi lauas.</p>
          </div>

          {/* Navigeerimine */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">MENÜÜ</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map(({ href, key }, index) => (
                <NavigationLink key={index} href={href} className={getLinkClassName(href)}>{t(key)}</NavigationLink>
              ))}
            </nav>
          </div>

          {/* Kontaktinfo */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Aadress</h3>
            {contactInformation.map(({ type, value, language }, index) => (
              <p key={index} className="mb-2">
                {type === "email" || type === "phone" ? (
                  <a href={`${type === "email" ? "mailto" : "tel"}:${value}`} className="hover:text-accent">
                    {value} {language && `(${language})`}
                  </a>
                ) : (
                  <span className="font-bold">{value}</span>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Sotsiaalmeedia lingid */}
          <div className="flex space-x-4">
            {socialMediaLinks.map(({ href, label, Icon }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a href={href} aria-label={label} className="hover:text-accent">
                    <Icon className="w-6 h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          {/* Autoriõiguste teade */}
          <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} ULRIH ALTENKIRCH FIE. Kõik õigused kaitstud.</p>
        </div>
      </footer>
    </TooltipProvider>
  );
}
