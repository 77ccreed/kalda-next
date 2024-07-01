import React from 'react';
import { Check, Minus } from 'lucide-react';
import NavigationLink from '@/components/NavigationLink';
import { Button } from '@/components/ui/button';
import Headline from '@/components/common/Headline';
import WidgetWrapper from '@/components/common/WidgetWrapper';

type CallToActionType = {
  text: string;
  href: string;
};

type ComparisonProps = {
  header?: {
    title: string;
    subtitle?: string;
    tagline?: string;
  };
  columns: {
    title: string;
    items: string[];
    callToAction?: CallToActionType;
  }[];
  id?: string;
  hasBackground?: boolean;
};

const Comparison = ({ header, columns, id, hasBackground = false }: ComparisonProps) => (
  <WidgetWrapper id={id || 'comparison'} hasBackground={hasBackground} containerClass="bg-primary text-secondary py-12">
    {header && (
      <Headline
        header={header}
        containerClass="text-center mb-8"
        titleClass="text-4xl font-bold text-secondary"
        subtitleClass="mt-4 text-xl text-secondary"
      />
    )}
    <div className="relative flex overflow-x-auto pb-12">
      {columns.map(({ title, items, callToAction }, index) => (
        <div
          key={`column-content-${index}`}
          className={`relative mx-auto w-full min-w-fit max-w-3xl select-none border-r border-solid border-gray-300 px-4 py-4 first-of-type:sticky first-of-type:left-0 first-of-type:z-10 first-of-type:w-auto ${hasBackground ? 'first-of-type:bg-primary' : 'first-of-type:bg-white'
            } first-of-type:pl-6 last-of-type:border-none dark:border-slate-500 md:px-5 md:first-of-type:w-full md:first-of-type:pl-5`}
        >
          <h3 className={`mb-4 border-b border-solid border-gray-300 pb-4 text-lg font-medium uppercase leading-6 text-secondary ${index === 0 ? 'text-left' : 'text-center'}`}>
            {title}
          </h3>
          {items.map((item, idx) => (
            <div key={idx} className={`leading-7 text-secondary ${index === 0 ? 'text-left' : 'text-center'}`}>
              {item === '✓' ? (
                <Check className="mt-2 w-full text-primary-600" />
              ) : item === '✗' ? (
                <Minus className="mt-2 w-full text-red-600" />
              ) : index !== 0 ? (
                <p className="mt-2">{item}</p>
              ) : (
                <h4 className="mt-2 text-lg">{item}</h4>
              )}
            </div>
          ))}
          {index !== 0 && callToAction && (
            <Button className="w-full bg-secondary text-white hover:bg-secondary-dark transition-colors mt-8 shadow-lg">
              <NavigationLink href={callToAction.href}>
                {callToAction.text}
              </NavigationLink>
            </Button>
          )}
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Comparison;
