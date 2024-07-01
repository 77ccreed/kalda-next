import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavigationLink from '@/components/NavigationLink';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Img1 from '@/assets/images/telkimisniit/camp1.jpg';
import Img2 from '@/assets/images/autoelamud/mobile1.jpg';
import Img3 from '@/assets/images/kampingmaja/chouse1_small.jpg';
import Img4 from '@/assets/images/lihtneoomaja/kainestusmaja1_small.jpg';
import Img5 from '@/assets/images/bbtoad/GHroom2a.jpg';
import Img6 from '@/assets/images/puhkemaja/puhkemaja SW.jpg';

type HeroImageGridProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  callToAction?: string;
  callToAction2?: string;
  callToActionLink?: string;
  callToActionLink2?: string;
};

const HeroImageGrid = ({
  title,
  subtitle,
  tagline,
  callToAction,
  callToAction2,
  callToActionLink,
  callToActionLink2
}: HeroImageGridProps) => {
  return (
    <section className="relative bg-secondary text-primary-foreground" id="hero-image-grid" role="banner" aria-labelledby="hero-title">
      <div className="absolute inset-0 overflow-hidden border-border">
        <div className="absolute left-0 top-1 h-[20500px] w-[20500px] translate-x-[-47.5%] rounded-full bg-primary" />
      </div>
      <div className="container relative flex flex-col px-4">
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-32 lg:pt-40">
          <div className="text-center md:text-left">
            <div className="mx-auto max-w-3xl md:mb-8">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-secondary">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 id="hero-title" className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tight md:text-5xl text-primary-foreground">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mb-8 text-lg font-normal text-primary-foreground">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                {callToAction && callToActionLink && (
                  <Button asChild variant="secondary" className="shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <NavigationLink href={callToActionLink}>
                      {callToAction}
                    </NavigationLink>
                  </Button>
                )}
                {callToAction2 && callToActionLink2 && (
                  <Button asChild variant="highlight" className="shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <NavigationLink href={callToActionLink2}>
                      {callToAction2}
                    </NavigationLink>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AspectRatio ratio={3 / 2} className="relative w-full h-64">
            <div className="relative w-full h-full">
              <Image
                src={Img1}
                alt="Telkimisniit"
                layout="fill"
                className="rounded-md object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </AspectRatio>
          <AspectRatio ratio={3 / 2} className="relative w-full h-64">
            <div className="relative w-full h-full">
              <Image
                src={Img2}
                alt="Autoelamud"
                layout="fill"
                className="rounded-md object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </AspectRatio>
          <AspectRatio ratio={4 / 3} className="relative w-full h-64">
            <div className="relative w-full h-full">
              <Image
                src={Img3}
                alt="Kämpingumaja"
                layout="fill"
                className="rounded-md object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </AspectRatio>
          <AspectRatio ratio={4 / 3} className="relative w-full h-64">
            <div className="relative w-full h-full">
              <Image
                src={Img4}
                alt="Lihtne öömaja"
                layout="fill"
                className="rounded-md object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </AspectRatio>
          <AspectRatio ratio={4 / 3} className="relative w-full h-64">
            <div className="relative w-full h-full">
              <Image
                src={Img5}
                alt="Kodumajutuse toad"
                layout="fill"
                className="rounded-md object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </AspectRatio>
          <AspectRatio ratio={4 / 3} className="relative w-full h-64">
            <div className="relative w-full h-full">
              <Image
                src={Img6}
                alt="Puhkemaja"
                layout="fill"
                className="rounded-md object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default HeroImageGrid;
