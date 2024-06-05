"use client";

import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import { SiFacebook, SiTripadvisor } from 'react-icons/si';
import { Home, Building, Bed, Award, Map } from "lucide-react";
import NavigationLink from "./NavigationLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navigationLinks = [
  { href: "/meist", key: "meist" },
  { href: "/majutuse-tüübid/hostel", key: "hostel" },
  { href: "/majutuse-tüübid/kodumajutuse-toad", key: "kodumajutuseToad" },
  { href: "/majutuse-tüübid/puhkemaja", key: "puhkemaja" },
  { href: "/majutuse-tüübid/kampingmajad", key: "kampingmajad" },
  { href: "/majutuse-tüübid/karavanid-ja-autoelamud", key: "karavanidJaAutoelamud" },
  { href: "/majutuse-tüübid/telkimisala", key: "telkimisala" },
  { href: "/broneerimine", key: "broneerimine" },
  { href: "/teenused-ja-aktiivne-puhkus/kanuurent", key: "kanuurent" },
  { href: "/teenused-ja-aktiivne-puhkus/sündmuste-korraldamine", key: "sündmusteKorraldamine" },
  { href: "/teenused-ja-aktiivne-puhkus/saun", key: "saun" },
  { href: "/kontakt", key: "kontakt" },
];

const socialMediaLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: SiFacebook },
  { href: "https://tripadvisor.com", label: "TripAdvisor", Icon: SiTripadvisor },
  { href: "https://booking.com", label: "Booking.com", Icon: Home },
  { href: "https://hotel.de", label: "Hotel.de", Icon: Building },
  { href: "https://hostelworld.com", label: "Hostelworld", Icon: Bed },
  { href: "#", label: "Travelmyth Award", Icon: Award },
  { href: "#", label: "Spotocamp", Icon: Map },
];

function Branding() {
  const t = useTranslations("Navigation");
  return (
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-3xl font-bold mb-4">{t("brandingTitle")}</h2>
      <p className="mb-2">{t("brandingSubtitle1")}</p>
      <p className="mb-4">{t("brandingSubtitle2")}</p>
      <p className="text-sm">{t("brandingDescription")}</p>
    </div>
  );
}

function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const getLinkClassName = (href: string) => (
    `hover-accent ${pathname === href ? 'text-primary font-semibold' : ''}`
  );

  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-semibold mb-4">{t("navigationTitle")}</h3>
      <nav className="flex flex-col space-y-2">
        {navigationLinks.map(({ href, key }, index) => (
          <NavigationLink key={index} href={href} className={getLinkClassName(href)}>{t(key)}</NavigationLink>
        ))}
      </nav>
    </div>
  );
}

function ContactInfo() {
  const t = useTranslations("Navigation");
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-semibold mb-4">{t("contactTitle")}</h3>
      <p className="mb-2">{t("address")}</p>
      <p className="mb-2">
        <a href="mailto:puhkekeskus@msn.com" className="hover-accent">
          {t("email")}
        </a>
      </p>
      <p className="mb-2">
        <a href="tel:+37256652061" className="hover-accent">
          {t("phone1")} ({t("phone1Language")})
        </a>
      </p>
      <p className="mb-2">
        <a href="tel:+37255594776" className="hover-accent">
          {t("phone2")} ({t("phone2Language")})
        </a>
      </p>
      <p className="font-bold mb-2">{t("bankAccount1")}</p>
      <p className="font-bold mb-2">{t("bankAccount2")}</p>
      <p className="font-bold">{t("bankAccount3")}</p>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="flex space-x-4">
      {socialMediaLinks.map(({ href, label, Icon }, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <a href={href} aria-label={label} className="hover-accent">
              <Icon className="w-6 h-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("Navigation");
  return (
    <TooltipProvider>
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Branding />
          <Navigation />
          <ContactInfo />
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <SocialMediaLinks />
          <p className="mt-4 md:mt-0 text-sm">&copy; {new Date().getFullYear()} {t("allRightsReserved")}</p>
        </div>
      </footer>
    </TooltipProvider>
  );
}
