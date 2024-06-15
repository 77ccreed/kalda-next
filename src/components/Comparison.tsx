import React from 'react';
import { Check, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type CallToActionType = {
  text: string;
  href: string;
  targetBlank?: boolean;
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
  <section className={`relative ${hasBackground ? 'bg-primary' : ''}`} id={id || 'comparison'}>
    <div className="container mx-auto px-4 py-12">
      {header && (
        <div className="text-center mb-8">
          {header.tagline && <p className="text-lg font-semibold text-secondary">{header.tagline}</p>}
          {header.title && <h2 className="text-3xl font-bold text-secondary">{header.title}</h2>}
          {header.subtitle && <p className="mt-4 text-xl text-secondary">{header.subtitle}</p>}
        </div>
      )}
      <div className="relative ml-[-1em] flex overflow-x-auto md:pb-12">
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
              <Button href={callToAction.href} target={callToAction.targetBlank ? '_blank' : '_self'} className="w-full bg-secondary text-white hover:bg-secondary-dark transition-colors mt-8">
                {callToAction.text}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Comparison;
