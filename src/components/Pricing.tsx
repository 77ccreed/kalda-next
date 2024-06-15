import Image from 'next/image';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Headline from '@/components/common/Headline';
import WidgetWrapper from '@/components/common/WidgetWrapper';
import CTA from '@/components/common/CTA';

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
    callToAction2?: CallToActionType; // Add a secondary call-to-action
    hasRibbon?: boolean;
    ribbonTitle?: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
  id?: string;
  hasBackground?: boolean;
};

const Pricing = ({ header, prices, id, hasBackground = true }: PricingProps) => (
  <WidgetWrapper id={id || 'pricing'} hasBackground={hasBackground} containerClass="bg-primary text-secondary">
    {header && (
      <Headline
        header={header}
        containerClass="text-center mb-8"
        titleClass="text-3xl font-bold"
        subtitleClass="mt-4 text-xl"
      />
    )}
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {prices.map((price, index) => (
        <Card key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          {price.hasRibbon && price.ribbonTitle && (
            <div className="absolute top-0 right-0 bg-secondary text-white py-1 px-3 rounded-bl-lg z-10">
              {price.ribbonTitle}
            </div>
          )}
          {price.image && (
            <div className="relative w-full h-48">
              <Image
                src={price.image.src}
                alt={price.image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          )}
          <CardContent className="flex flex-col justify-between p-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-secondary">{price.title}</h3>
              {price.subtitle && <p className="text-secondary mt-2">{price.subtitle}</p>}
              <div className="mt-4 mb-8">
                <div className="text-5xl font-bold text-secondary">{price.price}</div>
                <div className="text-secondary">{price.period}</div>
              </div>
            </div>
            <ul className="text-left space-y-2 mb-8">
              {price.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="text-secondary mr-2" />
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              {price.callToAction && (
                <CTA
                  callToAction={price.callToAction}
                  linkClass="w-full sm:w-auto bg-secondary text-white hover:bg-secondary-dark transition-colors"
                />
              )}
              {price.callToAction2 && (
                <CTA
                  callToAction={price.callToAction2}
                  linkClass="w-full sm:w-auto bg-gray-200 text-secondary hover:bg-gray-300 transition-colors"
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </WidgetWrapper>
);

export default Pricing;
