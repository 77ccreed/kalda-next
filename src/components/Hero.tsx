import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavigationLink from '@/components/NavigationLink';

type HeroProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  callToAction?: string;
  callToAction2?: string;
  callToActionLink?: string;
  callToActionLink2?: string;
  image?: {
    src: string;
    alt: string;
    blurDataURL?: string;
  };
};

const Hero = ({
  title,
  subtitle,
  tagline,
  callToAction,
  callToAction2,
  callToActionLink,
  callToActionLink2,
  image
}: HeroProps) => {
  const t = useTranslations('IndexPage');

  return (
    <section className="relative bg-secondary text-primary-foreground" id="hero" role="banner" aria-labelledby="hero-title">
      <div className="absolute inset-0 overflow-hidden border-border">
        <div className="absolute left-0 top-1 h-[20500px] w-[20500px] translate-x-[-47.5%] rounded-full bg-primary" />
      </div>
      <div className="container relative flex flex-col px-4">
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:flex md:min-h-screen">
          <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
            <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
              <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
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
                <div className="mx-auto max-w-3xl">
                  {subtitle && (
                    <p className="mb-8 text-lg font-normal text-primary-foreground">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    {callToAction && callToActionLink && (
                      <Button asChild variant="secondary" className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <NavigationLink href={callToActionLink}>
                          {callToAction}
                        </NavigationLink>
                      </Button>
                    )}
                    {callToAction2 && callToActionLink2 && (
                      <Button asChild variant="highlight" className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <NavigationLink href={callToActionLink2}>
                          {callToAction2}
                        </NavigationLink>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {image?.src && (
              <div className="block flex-1 items-center md:flex">
                <div className="relative m-auto h-full max-w-4xl">
                  <Image
                    className="mx-auto h-full w-auto rounded-md object-cover drop-shadow-2xl"
                    src={image.src}
                    alt={image.alt}
                    blurDataURL={image.blurDataURL}
                    width={540}
                    height={405}
                    sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                    loading="eager"
                    placeholder="blur"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
