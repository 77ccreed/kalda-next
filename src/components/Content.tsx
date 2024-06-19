import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Headline from '@/components/common/Headline';
import WidgetWrapper from '@/components/common/WidgetWrapper';

type ContentProps = {
  header?: {
    title: string;
    subtitle?: string;
    tagline?: string;
  };
  content?: string;
  items?: {
    title: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  image?: {
    src: string | StaticImageData;
    alt: string;
  };
  isReversed?: boolean;
  isAfterContent?: boolean;
  id?: string;
  hasBackground?: boolean;
};

const Content = ({
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
}: ContentProps) => {
  return (
    <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}>
      {header && (
        <Headline
          header={header}
          containerClass="text-center mb-8"
          titleClass="text-3xl sm:text-5xl font-bold text-primary-foreground"
          subtitleClass="mt-4 text-xl text-gray-600"
        />
      )}
      <div className="mx-auto max-w-7xl">
        <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
          <div className="self-center md:basis-1/2">
            {content && <div className="mb-8 lg:mb-12 text-lg text-primary-foreground">{content}</div>}
            {items && (
              <div className="gap-4 md:gap-y-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex max-w-full mb-4">
                    <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1">
                      {item.icon ? <item.icon className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-primary-foreground mt-1 mb-2">{item.title}</h3>
                      <p className="mt-1 text-primary-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
            {image && (
              <div className="relative m-auto max-w-4xl">
                <Card className="w-full h-full bg-primary shadow-lg">
                  <CardContent className="p-0">
                    <Image
                      className="w-full rounded-lg object-cover"
                      src={image.src}
                      width={828}
                      height={828}
                      alt={image.alt}
                      sizes="(max-width: 768px) 100vw, 432px"
                      placeholder="blur"
                      quality={100}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Content;
