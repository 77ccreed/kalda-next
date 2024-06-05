"use client";

import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import { SiFacebook, SiTripadvisor } from 'react-icons/si';
import { Home, Building, Bed, Award, Map } from "lucide-react";
import NavigationLink from "./NavigationLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navigationLinks = [
  { href: "/meist", key: "meist" },
  { href: "/majutuse/hostel", key: "hostel" },
  { href: "/majutuse/kodumajutuse-toad", key: "kodumajutuseToad" },
  { href: "/majutuse/puhkemaja", key: "puhkemaja" },
  { href: "/majutuse/kampingmajad", key: "kampingmajad" },
  { href: "/majutuse/karavanid-ja-autoelamud", key: "karavanidJaAutoelamud" },
  { href: "/majutuse/telkimisala", key: "telkimisala" },
  { href: "/broneerimine", key: "broneerimine" },
  { href: "/teenused/kanuurent", key: "kanuurent" },
  { href: "/teenused/sündmuste-korraldamine", key: "sündmusteKorraldamine" },
  { href: "/teenused/saun", key: "saun" },
  { href: "/kontakt", key: "kontakt" },
];

const socialMediaLinks = [
  { href: "https://www.facebook.com/profile.php?id=100041395076437", label: "Facebook", Icon: SiFacebook },
  { href: "https://www.tripadvisor.com/Hotel_Review-g13971741-d1068278-Reviews-Kalda_Talu-Iigaste_Valga_County.html", label: "TripAdvisor", Icon: SiTripadvisor },
  { href: "https://www.booking.com/hotel/ee/kalda-tourist-farm-holiday-villagee.et.html", label: "Booking.com", Icon: Home },
  { href: "https://www.maaturism.ee/index.php?id=eesti-maaturism&service_id=1453", label: "Maaturism.ee", Icon: Building },
  { href: "https://www.hostelworld.com/pwa/wds/hosteldetails.php/Kalda-Talu-Puhkekeskus/Valga/102124?from=2024-06-06&to=2024-06-07&guests=2", label: "Hostelworld", Icon: Bed },
  { href: "https://www.travelmyth.co.uk/Tolliste-Tiidu/Hotels?sm=true&highlighted_hotel=311296", label: "Travelmyth Award", Icon: Award },
  { href: "https://www.spottocamp.com/en/campsites/kalda-talu-puhkekeskus-camping-valgamaa", label: "Spotocamp", Icon: Map },
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
