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

const LinkButton: React.FC<{ href?: string; className: string; children: React.ReactNode }> = ({ href, className, children }) => (
  href ? (
    <Button asChild className={className}>
      <NavigationLink href={href}>
        {children}
      </NavigationLink>
    </Button>
  ) : null
);

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
  return (
    <section className="relative bg-secondary text-primary-foreground" id="heroTwo" role="banner" aria-labelledby="hero-title">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[15000px] w-[15000px] translate-x-[-50%] rounded-full bg-primary" />
      </div>
      <div className="container relative flex flex-col px-4">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:flex md:min-h-screen">
          <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
            <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
              <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
                {tagline && (
                  <p className="text-base font-semibold uppercase tracking-wide text-secondary">
                    {tagline}
                  </p>
                )}
                {title && (
                  <h1 id="hero-title" className="leading-tighter font-heading mb-4 px-4 text-4xl font-bold tracking-tighter md:px-0 md:text-5xl">
                    {title}
                  </h1>
                )}
                <div className="mx-auto max-w-3xl">
                  {subtitle && (
                    <p className="mb-8 text-lg font-normal text-muted-foreground">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <LinkButton href={callToActionLink} className="btn bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary-focus">
                      {callToAction}
                    </LinkButton>
                    <LinkButton href={callToActionLink2} className="btn bg-secondary text-white hover:bg-secondary-dark focus:ring-2 focus:ring-secondary-focus">
                      {callToAction2}
                    </LinkButton>
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
