import { useLocale, useTranslations } from 'next-intl';
import { locales } from '../config';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FlagIcon } from './FlagIcon';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  // Filter out the current locale
  const otherLocales = locales.filter((cur) => cur !== locale);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-secondary text-white hover:text-primary transition-colors flex items-center">
            <FlagIcon code={locale} className="mr-2" />
            {t('locale', { locale })}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-secondary text-white rounded shadow-lg py-2 w-48">
            {otherLocales.map((cur) => (
              <NavigationMenuLink key={cur}>
                <LocaleSwitcherSelect
                  value={cur}
                  label={t('locale', { locale: cur })}
                  isActive={cur === locale}
                />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
