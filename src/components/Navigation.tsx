"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationItem {
  href: string;
  text: string;
}

interface MenuItems {
  title: string;
  links: NavigationItem[];
}

interface NavigationMenuComponentProps {
  items: MenuItems;
  isActive: boolean;
}

const NavigationMenuComponent: React.FC<NavigationMenuComponentProps> = ({ items, isActive }) => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={`bg-secondary text-white hover-accent transition-colors ${isActive ? 'text-primary' : ''}`} aria-haspopup="true" aria-expanded={isActive}>
          <span>{items.title}</span>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-secondary text-white rounded shadow-lg py-2 w-48">
          {items.links.map((link) => (
            <NavigationMenuLink key={link.href} href={link.href} className="block px-4 py-2 hover-accent transition-colors duration-200">
              <NavigationLink href={link.href}>
                {link.text}
              </NavigationLink>
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const Navigation: React.FC = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const accommodationItems: MenuItems = {
    title: t("majutuseTüübid"),
    links: [
      { href: "/majutus/hostel", text: t("hostel") },
      { href: "/majutus/kodumajutuse-toad", text: t("kodumajutuseToad") },
      { href: "/majutus/puhkemaja", text: t("puhkemaja") },
      { href: "/majutus/kampingmajad", text: t("kampingmajad") },
      { href: "/majutus/karavanid-ja-autoelamud", text: t("karavanidJaAutoelamud") },
      { href: "/majutus/telkimisala", text: t("telkimisala") },
    ],
  };

  const servicesItems: MenuItems = {
    title: t("teenusedJaAktiivnePuhkus"),
    links: [
      { href: "/teenused/kanuurent", text: t("kanuurent") },
      { href: "/teenused/sündmuste-korraldamine", text: t("sündmusteKorraldamine") },
      { href: "/teenused/saun", text: t("saun") },
    ],
  };

  return (
    <header className="bg-secondary text-white">
      <nav className="container mx-auto flex justify-between items-center p-4 relative">
        <div className="flex items-center">
          <NavigationLink
            href="/"
            className={`text-2xl font-bold ${pathname === '/' || pathname === '/en' || pathname === '/de' ? 'text-primary' : 'text-white'} hover-accent`}
          >
            {t("home")}
          </NavigationLink>
          <div className="hidden md:flex space-x-4 ml-6 relative">
            <NavigationLink
              href="/meist"
              className={`block px-4 py-2 ${pathname === '/meist' || pathname === '/en/about-us' || pathname === '/de/uber-uns' ? 'text-primary' : 'text-white'} hover-accent`}
            >
              {t("meist")}
            </NavigationLink>
            <NavigationMenuComponent
              items={accommodationItems}
              isActive={pathname.includes("/majutus")}
            />
            <NavigationMenuComponent
              items={servicesItems}
              isActive={pathname.includes("/teenused")}
            />
            <NavigationLink
              href="/broneerimine"
              className={`block px-4 py-2 ${pathname === '/broneerimine' || pathname === '/en/booking' || pathname === '/de/buchung' ? 'text-primary' : 'text-white'} hover-accent`}
            >
              {t("broneerimine")}
            </NavigationLink>
            <NavigationLink
              href="/kontakt"
              className={`block px-4 py-2 ${pathname === '/kontakt' || pathname === '/en/contact' || pathname === '/de/kontakt' ? 'text-primary' : 'text-white'} hover-accent`}
            >
              {t("kontakt")}
            </NavigationLink>
          </div>
        </div>
        <div className="flex items-center">
          <LocaleSwitcher />
          <Button onClick={toggleMenu} className="md:hidden ml-4 p-2" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </Button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-secondary md:hidden z-10">
            <div className="flex flex-col items-start space-y-4 p-4">
              <NavigationLink
                href="/meist"
                className={`block px-4 py-2 text-lg font-bold text-left ${pathname === '/meist' || pathname === '/en/about-us' || pathname === '/de/uber-uns' ? 'text-primary' : 'text-white'} hover-accent`}
                onClick={handleLinkClick}
              >
                {t("meist")}
              </NavigationLink>
              <div className="w-full">
                <span className="block px-4 py-2 text-lg font-bold text-left">{t("majutuseTüübid")}</span>
                <div className="w-full">
                  <span className="block px-4 py-2 text-lg font-bold text-left">{t("majutuseTüübid")}</span>
                  <NavigationLink
                    href="/majutus/hostel"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/hostel' || pathname === '/en/accommodation/hostel' || pathname === '/de/unterkunft/hostel' ? 'text-primary' : 'text-white'} hover-accent`}
                    onClick={handleLinkClick}
                  >
                    {t("hostel")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/kodumajutuse-toad"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/kodumajutuse-toad' || pathname === '/en/accommodation/homestay-rooms' || pathname === '/de/unterkunft/gastezimmer' ? 'text-primary' : 'text-white'} hover-accent`}
                    onClick={handleLinkClick}
                  >
                    {t("kodumajutuseToad")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/puhkemaja"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/puhkemaja' || pathname === '/en/accommodation/holiday-house' || pathname === '/de/unterkunft/ferienhaus' ? 'text-primary' : 'text-white'} hover-accent`}
                    onClick={handleLinkClick}
                  >
                    {t("puhkemaja")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/kampingmajad"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/kampingmajad' || pathname === '/en/accommodation/camping-cabins' || pathname === '/de/unterkunft/campinghauser' ? 'text-primary' : 'text-white'} hover-accent`}
                    onClick={handleLinkClick}
                  >
                    {t("kampingmajad")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/karavanid-ja-autoelamud"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/karavanid-ja-autoelamud' || pathname === '/en/accommodation/caravans-and-motorhomes' || pathname === '/de/unterkunft/wohnwagen-und-wohnmobile' ? 'text-primary' : 'text-white'} hover-accent`}
                    onClick={handleLinkClick}
                  >
                    {t("karavanidJaAutoelamud")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/telkimisala"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/telkimisala' || pathname === '/en/accommodation/camping-area' || pathname === '/de/unterkunft/zeltplatz' ? 'text-primary' : 'text-white'} hover-accent`}
                    onClick={handleLinkClick}
                  >
                    {t("telkimisala")}
                  </NavigationLink>
                </div>
              </div>
              <div className="w-full">
                <span className="block px-4 py-2 text-lg font-bold text-left">{t("teenusedJaAktiivnePuhkus")}</span>
                <NavigationLink
                  href="/teenused/kanuurent"
                  className={`block px-4 py-2 text-left ${pathname === '/teenused/kanuurent' || pathname === '/en/services/canoe-rental' || pathname === '/de/dienstleistungen/kanuverleih' ? 'text-primary' : 'text-white'} hover-accent`}
                  onClick={handleLinkClick}
                >
                  {t("kanuurent")}
                </NavigationLink>
                <NavigationLink
                  href="/teenused/sundmuste-korraldamine"
                  className={`block px-4 py-2 text-left ${pathname === '/teenused/sundmuste-korraldamine' || pathname === '/en/services/event-organization' || pathname === '/de/dienstleistungen/veranstaltungsorganisation' ? 'text-primary' : 'text-white'} hover-accent`}
                  onClick={handleLinkClick}
                >
                  {t("sündmusteKorraldamine")}
                </NavigationLink>
                <NavigationLink
                  href="/teenused/saun"
                  className={`block px-4 py-2 text-left ${pathname === '/teenused/saun' || pathname === '/en/services/sauna' || pathname === '/de/dienstleistungen/sauna' ? 'text-primary' : 'text-white'} hover-accent`}
                  onClick={handleLinkClick}
                >
                  {t("saun")}
                </NavigationLink>
              </div>
              <NavigationLink
                href="/broneerimine"
                className={`block px-4 py-2 text-lg font-bold text-left ${pathname === '/broneerimine' || pathname === '/en/booking' || pathname === '/de/buchung' ? 'text-primary' : 'text-white'} hover-accent`}
                onClick={handleLinkClick}
              >
                {t("broneerimine")}
              </NavigationLink>
              <NavigationLink
                href="/kontakt"
                className={`block px-4 py-2 text-lg font-bold text-left ${pathname === '/kontakt' || pathname === '/en/contact' || pathname === '/de/kontakt' ? 'text-primary' : 'text-white'} hover-accent`}
                onClick={handleLinkClick}
              >
                {t("kontakt")}
              </NavigationLink>
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
