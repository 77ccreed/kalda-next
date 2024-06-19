import { twMerge } from 'tailwind-merge';
import Headline from '@/components/common/Headline';

interface FeaturesProps {
  header?: {
    title: string;
    subtitle?: string;
    tagline?: string;
    position?: 'left' | 'center' | 'right';
  };
  items: {
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
    callToAction?: {
      text: string;
      href: string;
      targetBlank?: boolean;
    };
  }[];
  columns?: number;
  id?: string;
}

const Features = ({ header, items, columns = 3, id }: FeaturesProps) => (
  <section className="relative py-12 md:py-16 lg:py-20 bg-primary" id={id || 'features'}>
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      {header && (
        <Headline
          header={header}
          containerClass="mb-6 md:mb-12"
          titleClass="text-4xl md:text-5xl text-primary-foreground"
          subtitleClass="mt-4 text-xl text-primary-foreground"
          taglineClass="text-secondary"
        />
      )}
      <div
        className={twMerge(
          `grid mx-auto gap-8 md:gap-y-12 ${columns === 4
            ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
            : columns === 3
              ? 'lg:grid-cols-3 sm:grid-cols-2'
              : columns === 2
                ? 'sm:grid-cols-2'
                : 'max-w-4xl'
          }`,
        )}
      >
        {items.map(({ title, description, icon: Icon, callToAction }, index) => (
          <div key={id ? `item-${id}-${index}` : `item-grid-${index}`} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <div className="flex flex-col items-center h-full">
              {Icon && <Icon className="h-12 w-12 mb-4 text-primary-foreground" />}
              <div className="flex-1 text-center">
                <h3 className="text-xl font-bold text-primary-foreground">{title}</h3>
                <p className="mt-3 text-md text-primary-foreground">{description}</p>
              </div>
              {callToAction && (
                <a
                  href={callToAction.href}
                  target={callToAction.targetBlank ? '_blank' : '_self'}
                  rel={callToAction.targetBlank ? 'noopener noreferrer' : undefined}
                  className="mt-4 text-primary-foreground font-bold hover:underline hover:text-secondary"
                >
                  {callToAction.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
