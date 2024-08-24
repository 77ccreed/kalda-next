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

const Navigation: React.FC = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="bg-secondary text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4 relative">
        <div className="flex items-center">
          <NavigationLink
            href="/"
            className={`text-2xl font-bold ${pathname === '/' ? 'text-primary' : 'text-accent'} hover:text-primary transition-colors`}
            onClick={handleLinkClick} 
          >
            {t("home")}
          </NavigationLink>
          <div className="hidden md:flex space-x-6 ml-6">
            <NavigationLink
              href="/meist"
              className={`block px-4 py-2 ${pathname === '/meist' ? 'text-primary font-semibold' : 'text-white'} hover:text-primary transition-colors`}
              onClick={handleLinkClick} // Added onClick handler here
            >
              {t("meist")}
            </NavigationLink>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-secondary hover:text-primary transition-colors ${pathname.startsWith("/majutus") ? 'text-primary font-semibold' : 'text-white'}`} aria-haspopup="true">
                    {t("majutuseTüübid")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-secondary text-white rounded shadow-lg py-2 w-56">
                    <NavigationMenuLink>
                      <NavigationLink href="/majutus/hostel" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/majutus/hostel' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("hostel")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/majutus/kodumajutuse-toad" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/majutus/kodumajutuse-toad' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("kodumajutuseToad")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/majutus/puhkemaja" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/majutus/puhkemaja' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("puhkemaja")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/majutus/kampingmajad" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/majutus/kampingmajad' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("kampingmajad")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/majutus/karavanid-ja-autoelamud" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/majutus/karavanid-ja-autoelamud' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("karavanidJaAutoelamud")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/majutus/telkimisala" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/majutus/telkimisala' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("telkimisala")}
                      </NavigationLink>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-secondary hover:text-primary transition-colors ${pathname.startsWith("/teenused") ? 'text-primary font-semibold' : 'text-white'}`} aria-haspopup="true">
                    <span>{t("teenusedJaAktiivnePuhkus")}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-secondary text-white rounded shadow-lg py-2 w-56">
                    <NavigationMenuLink>
                      <NavigationLink href="/teenused/kanuurent" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/teenused/kanuurent' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("kanuurent")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/teenused/sundmuste-korraldamine" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/teenused/sundmuste-korraldamine' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("sündmusteKorraldamine")}
                      </NavigationLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <NavigationLink href="/teenused/saun" className={`block px-4 py-2 hover:bg-primary hover:text-secondary transition-colors duration-200 ${pathname === '/teenused/saun' ? 'text-primary' : 'text-white'}`} onClick={handleLinkClick}>
                        {t("saun")}
                      </NavigationLink>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationLink
              href="/broneerimine"
              className={`block px-4 py-2 ${pathname === '/broneerimine' ? 'text-primary font-semibold' : 'text-white'} hover:text-primary transition-colors`}
              onClick={handleLinkClick} // Added onClick handler here
            >
              {t("broneerimine")}
            </NavigationLink>
            <NavigationLink
              href="/kontakt"
              className={`block px-4 py-2 ${pathname === '/kontakt' ? 'text-primary font-semibold' : 'text-white'} hover:text-primary transition-colors`}
              onClick={handleLinkClick} // Added onClick handler here
            >
              {t("kontakt")}
            </NavigationLink>
          </div>
        </div>
        <div className="flex items-center">
          <LocaleSwitcher />
          <Button onClick={toggleMenu} className="md:hidden ml-4 p-2 bg-[#2F4858] hover:bg-[#1F2C3A]" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </Button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-secondary md:hidden z-10 shadow-lg">
            <div className="flex flex-col items-start space-y-4 p-4">
              <NavigationLink
                href="/meist"
                className={`block px-4 py-2 text-lg font-bold text-left ${pathname === '/meist' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                onClick={handleLinkClick}
              >
                {t("meist")}
              </NavigationLink>
              <div className="w-full">
                <span className="block px-4 py-2 text-lg font-bold text-left">{t("majutuseTüübid")}</span>
                <div className="w-full">
                  <NavigationLink
                    href="/majutus/hostel"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/hostel' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {t("hostel")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/kodumajutuse-toad"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/kodumajutuse-toad' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {t("kodumajutuseToad")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/puhkemaja"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/puhkemaja' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {t("puhkemaja")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/kampingmajad"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/kampingmajad' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {t("kampingmajad")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/karavanid-ja-autoelamud"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/karavanid-ja-autoelamud' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {t("karavanidJaAutoelamud")}
                  </NavigationLink>
                  <NavigationLink
                    href="/majutus/telkimisala"
                    className={`block px-4 py-2 text-left ${pathname === '/majutus/telkimisala' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
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
                  className={`block px-4 py-2 text-left ${pathname === '/teenused/kanuurent' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                  onClick={handleLinkClick}
                >
                  {t("kanuurent")}
                </NavigationLink>
                <NavigationLink
                  href="/teenused/sundmuste-korraldamine"
                  className={`block px-4 py-2 text-left ${pathname === '/teenused/sundmuste-korraldamine' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                  onClick={handleLinkClick}
                >
                  {t("sündmusteKorraldamine")}
                </NavigationLink>
                <NavigationLink
                  href="/teenused/saun"
                  className={`block px-4 py-2 text-left ${pathname === '/teenused/saun' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                  onClick={handleLinkClick}
                >
                  {t("saun")}
                </NavigationLink>
              </div>
              <NavigationLink
                href="/broneerimine"
                className={`block px-4 py-2 text-lg font-bold text-left ${pathname === '/broneerimine' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
                onClick={handleLinkClick}
              >
                {t("broneerimine")}
              </NavigationLink>
              <NavigationLink
                href="/kontakt"
                className={`block px-4 py-2 text-lg font-bold text-left ${pathname === '/kontakt' ? 'text-primary' : 'text-white'} hover:text-primary transition-colors`}
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
