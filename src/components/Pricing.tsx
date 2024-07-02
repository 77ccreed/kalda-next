import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Headline from '@/components/common/Headline';
import WidgetWrapper from '@/components/common/WidgetWrapper';
import NavigationLink from '@/components/NavigationLink';
import { Button } from '@/components/ui/button';

type CallToActionType = {
  text: string;
  href: string;
  targetBlank?: boolean;
};

type PricingProps = {
  header?: {
    title: string;
    subtitle?: string;
    tagline?: string;
  };
  prices: {
    title: string;
    subtitle?: string;
    price: string;
    period: string;
    items: string[];
    callToAction?: CallToActionType;
    callToAction2?: CallToActionType;
    hasRibbon?: boolean;
    ribbonTitle?: string;
    image: {
      src: string | StaticImageData;
      alt: string;
    };
  }[];
  id?: string;
  hasBackground?: boolean;
};

const Pricing = ({ header, prices, id, hasBackground = true }: PricingProps) => (
  <WidgetWrapper id={id || 'pricing'} hasBackground={hasBackground} containerClass="bg-primary text-secondary py-12">
    {header && (
      <Headline
        header={header}
        containerClass="mb-8 md:mb-14"
        titleClass="text-4xl md:text-5xl text-primary-foreground"
        subtitleClass="mt-4 text-xl text-primary-foreground"
        taglineClass="text-secondary"
      />
    )}
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {prices.map((price, index) => (
        <Card key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {price.hasRibbon && price.ribbonTitle && (
            <div className="absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-red-500 text-white py-1 px-3 rounded-br-lg shadow-md z-10">
              {price.ribbonTitle}
            </div>
          )}
          {price.image && (
            <div className="relative w-full h-56">
              <Image
                src={price.image.src}
                alt={price.image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg"></div>
            </div>
          )}
          <CardContent className="flex flex-col justify-between p-6 text-center">
            <div>
              <h3 className="text-3xl font-semibold text-primary-foreground">{price.title}</h3>
              {price.subtitle && <p className="text-md text-gray-700 mt-2">{price.subtitle}</p>}
              <div className="mt-4 mb-8">
                <div className="inline-block bg-secondary text-white py-2 px-4 rounded-md text-5xl font-bold">{price.price}</div>
                <div className="text-lg text-gray-700 mt-2">{price.period}</div>
              </div>
            </div>
            <ul className="text-left space-y-2 mb-8">
              {price.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="text-primary-foreground mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {price.callToAction && (
                <Button asChild variant="primary" className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <NavigationLink href={price.callToAction.href}>
                    {price.callToAction.text}
                  </NavigationLink>
                </Button>
              )}
              {price.callToAction2 && (
                <Button asChild variant="secondary" className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <NavigationLink href={price.callToAction2.href}>
                    {price.callToAction2.text}
                  </NavigationLink>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </WidgetWrapper>
);

export default Pricing;
