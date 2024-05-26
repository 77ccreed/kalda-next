"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

const Dropdown = ({ isOpen, toggle, items }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        onClick={toggle}
        className="flex items-center space-x-1 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{items.title}</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
    </DropdownMenuTrigger>
    {isOpen && (
      <DropdownMenuContent className="bg-secondary text-white mt-2 rounded shadow-lg py-2 w-48 transition-all duration-300 ease-out">
        {items.links.map((link) => (
          <DropdownMenuItem key={link.href}>
            <NavigationLink href={link.href} className="block px-4 py-2">
              {link.text}
            </NavigationLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    )}
  </DropdownMenu>
);

export default function Navigation() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({ accommodation: false, services: false });

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const accommodationItems = {
    title: t("majutuseTüübid"),
    links: [
      { href: "/majutuse-tüübid/hostel", text: t("hostel") },
      { href: "/majutuse-tüübid/kodumajutuse-toad", text: t("kodumajutuseToad") },
      { href: "/majutuse-tüübid/puhkemaja", text: t("puhkemaja") },
      { href: "/majutuse-tüübid/kampingmajad", text: t("kampingmajad") },
      { href: "/majutuse-tüübid/karavanid-ja-autoelamud", text: t("karavanidJaAutoelamud") },
      { href: "/majutuse-tüübid/telkimisala", text: t("telkimisala") },
    ],
  };

  const servicesItems = {
    title: t("teenusedJaAktiivnePuhkus"),
    links: [
      { href: "/teenused-ja-aktiivne-puhkus/kanuurent", text: t("kanuurent") },
      { href: "/teenused-ja-aktiivne-puhkus/sündmuste-korraldamine", text: t("sündmusteKorraldamine") },
      { href: "/teenused-ja-aktiivne-puhkus/saun", text: t("saun") },
    ],
  };

  const menuItems = [
    { href: "/meist", text: t("meist") },
    { href: "/hinnakiri", text: t("hinnakiri") },
  ];

  return (
    <header className="bg-secondary text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <NavigationLink href="/" className="text-2xl font-bold">{t("home")}</NavigationLink>
          <div className="hidden md:flex space-x-4 ml-6">
            <NavigationLink href="/meist">{t("meist")}</NavigationLink>
            <Dropdown isOpen={isDropdownOpen.accommodation} toggle={() => toggleDropdown('accommodation')} items={accommodationItems} />
            <Dropdown isOpen={isDropdownOpen.services} toggle={() => toggleDropdown('services')} items={servicesItems} />
            <NavigationLink href="/hinnakiri">{t("hinnakiri")}</NavigationLink>
          </div>
        </div>
        <div className="flex items-center">
          <LocaleSwitcher />
          <Button onClick={toggleMenu} className="md:hidden ml-4 p-2" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-secondary md:hidden z-10">
            <div className="flex flex-col items-start space-y-4 p-4">
              {menuItems.map((item) => (
                <NavigationLink key={item.href} href={item.href} className="block px-4 py-2 text-lg font-bold text-left" onClick={handleLinkClick}>
                  {item.text}
                </NavigationLink>
              ))}
              <div className="w-full">
                <span className="block px-4 py-2 text-lg font-bold text-left">{t("majutuseTüübid")}</span>
                {accommodationItems.links.map((link) => (
                  <NavigationLink key={link.href} href={link.href} className="block px-4 py-2 text-left" onClick={handleLinkClick}>
                    {link.text}
                  </NavigationLink>
                ))}
              </div>
              <div className="w-full">
                <span className="block px-4 py-2 text-lg font-bold text-left">{t("teenusedJaAktiivnePuhkus")}</span>
                {servicesItems.links.map((link) => (
                  <NavigationLink key={link.href} href={link.href} className="block px-4 py-2 text-left" onClick={handleLinkClick}>
                    {link.text}
                  </NavigationLink>
                ))}
              </div>
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
