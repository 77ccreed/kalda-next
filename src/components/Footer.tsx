"use client";

import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import { SiFacebook, SiTripadvisor } from 'react-icons/si';
import { Home, Building, Bed, Award, Map, Mail, Phone } from "lucide-react";
import NavigationLink from "./NavigationLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socialMediaLinks = [
  { href: "https://www.facebook.com/profile.php?id=100041395076437", label: "Facebook", Icon: SiFacebook },
  { href: "https://www.tripadvisor.com/Hotel_Review-g13971741-d1068278-Reviews-Kalda_Talu-Iigaste_Valga_County.html", label: "TripAdvisor", Icon: SiTripadvisor },
  { href: "https://www.booking.com/hotel/ee/kalda-tourist-farm-holiday-villagee.et.html", label: "Booking.com", Icon: Home },
  { href: "https://www.maaturism.ee/index.php?id=eesti-maaturism&service_id=1453", label: "Maaturism.ee", Icon: Building },
  { href: "https://www.hostelworld.com/pwa/wds/hosteldetails.php/Kalda-Talu-Puhkekeskus/Valga/102124?from=2024-06-06&to=2024-06-07&guests=2", label: "Hostelworld", Icon: Bed },
  { href: "https://www.travelmyth.co.uk/Tolliste-Tiidu/Hotels?sm=true&highlighted_hotel=311296", label: "Travelmyth Award", Icon: Award },
  { href: "https://www.spottocamp.com/en/campsites/kalda-talu-puhkekeskus-camping-valgamaa", label: "Spotocamp", Icon: Map },
];

const navigationLinks = [
  { href: "/meist", paths: ['/meist', '/en/about-us', '/de/uber-uns'], translationKey: "meist" },
  { href: "/majutus/hostel", paths: ['/majutus/hostel', '/en/accommodation/hostel', '/de/unterkunft/hostel'], translationKey: "hostel" },
  { href: "/majutus/kodumajutuse-toad", paths: ['/majutus/kodumajutuse-toad', '/en/accommodation/homestay-rooms', '/de/unterkunft/privatzimmer'], translationKey: "kodumajutuseToad" },
  { href: "/majutus/puhkemaja", paths: ['/majutus/puhkemaja', '/en/accommodation/holiday-house', '/de/unterkunft/ferienhaus'], translationKey: "puhkemaja" },
  { href: "/majutus/kampingmajad", paths: ['/majutus/kampingmajad', '/en/accommodation/camping-houses', '/de/unterkunft/camping-hauser'], translationKey: "kampingmajad" },
  { href: "/majutus/karavanid-ja-autoelamud", paths: ['/majutus/karavanid-ja-autoelamud', '/en/accommodation/caravans-and-motorhomes', '/de/unterkunft/wohnwagen-und-wohnmobil'], translationKey: "karavanidJaAutoelamud" },
  { href: "/majutus/telkimisala", paths: ['/majutus/telkimisala', '/en/accommodation/camping-area', '/de/unterkunft/campingplatz'], translationKey: "telkimisala" },
  { href: "/teenused/kanuurent", paths: ['/teenused/kanuurent', '/en/services/canoe-rental', '/de/dienstleistungen/kanuverleih'], translationKey: "kanuurent" },
  { href: "/teenused/sundmuste-korraldamine", paths: ['/teenused/sundmuste-korraldamine', '/en/services/event-organization', '/de/dienstleistungen/veranstaltungsorganisation'], translationKey: "sündmusteKorraldamine" },
  { href: "/teenused/saun", paths: ['/teenused/saun', '/en/services/sauna', '/de/dienstleistungen/sauna'], translationKey: "saun" },
  { href: "/broneerimine", paths: ['/broneerimine', '/en/booking', '/de/buchung'], translationKey: "broneerimine" },
  { href: "/kontakt", paths: ['/kontakt', '/en/contact', '/de/kontakt'], translationKey: "kontakt" },
];

const Branding = () => {
  const t = useTranslations("Navigation");
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">{t("brandingTitle")}</h2>
      <p className="mb-2">{t("brandingSubtitle1")}</p>
      <p className="mb-4">{t("brandingSubtitle2")}</p>
      <p className="text-sm">{t("brandingDescription")}</p>
    </div>
  );
};

const Navigation = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl font-semibold mb-4">{t("navigationTitle")}</h3>
      <nav className="flex flex-col space-y-2">
        {navigationLinks.map(({ href, paths, translationKey }) => (
          <NavigationLink
            key={href}
            href={href}
            className={`hover-accent ${paths.includes(pathname) ? 'text-primary font-semibold' : ''}`}
          >
            {t(translationKey)}
          </NavigationLink>
        ))}
      </nav>
    </div>
  );
}

const ContactInfo = () => {
  const t = useTranslations("Navigation");
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl font-semibold mb-4">{t("contactTitle")}</h3>
      <p className="mb-2">{t("address")}</p>
      <div className="flex items-center mb-2">
        <Mail className="w-5 h-5 mr-2" />
        <a href="mailto:puhkekeskus@msn.com" className="hover-accent" aria-label="Email us at puhkekeskus@msn.com">
          {t("email")}
        </a>
      </div>
      <div className="flex items-center mb-2">
        <Phone className="w-5 h-5 mr-2" />
        <a href="tel:+37256652061" className="hover-accent" aria-label="Call us at +37256652061">
          {t("phone1")} ({t("phone1Language")})
        </a>
      </div>
      <div className="flex items-center mb-2">
        <Phone className="w-5 h-5 mr-2" />
        <a href="tel:+37255594776" className="hover-accent" aria-label="Call us at +37255594776">
          {t("phone2")} ({t("phone2Language")})
        </a>
      </div>
      <div className="mt-4">
        <h4 className="font-bold mb-2">{t("bankAccountTitle")}</h4>
        <ul className="list-disc list-inside">
          <li>{t("bankAccount1")}</li>
          <li>{t("bankAccount2")}</li>
          <li>{t("bankAccount3")}</li>
        </ul>
      </div>
    </div>
  );
}

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
      {socialMediaLinks.map(({ href, label, Icon }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <a href={href} aria-label={label} className="hover-accent" target="_blank" rel="noopener noreferrer">
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

const Footer = () => {
  const t = useTranslations("Navigation");
  const currentYear = new Date().getFullYear();

  return (
    <TooltipProvider>
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Branding />
          <Navigation />
          <ContactInfo />
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <SocialMediaLinks />
          <p className="mt-4 md:mt-0 text-sm">&copy; {currentYear} {t("allRightsReserved")}</p>
        </div>
      </footer>
    </TooltipProvider>
  );
}

export default Footer;
