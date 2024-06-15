import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    hasRibbon?: boolean;
    ribbonTitle?: string;
  }[];
  id?: string;
  hasBackground?: boolean;
};

const Pricing = ({ header, prices, id, hasBackground = false }: PricingProps) => (
  <section className={`relative bg-primary`} id={id || 'pricing'}>
    <div className="container mx-auto px-4 py-12">
      {header && (
        <div className="text-center mb-8">
          {header.tagline && <p className="text-lg font-semibold text-secondary">{header.tagline}</p>}
          {header.title && <h2 className="text-3xl font-bold text-secondary">{header.title}</h2>}
          {header.subtitle && <p className="mt-4 text-xl text-secondary">{header.subtitle}</p>}
        </div>
      )}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {prices.map((price, index) => (
          <Card key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            {price.hasRibbon && price.ribbonTitle && (
              <div className="absolute top-0 right-0 bg-secondary text-white py-1 px-3 rounded-bl-lg">
                {price.ribbonTitle}
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
              {price.callToAction && (
                <Button
                  href={price.callToAction.href}
                  target={price.callToAction.targetBlank ? '_blank' : '_self'}
                  className="w-full bg-secondary text-white hover:bg-secondary-dark transition-colors"
                >
                  {price.callToAction.text}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
