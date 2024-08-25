'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type HeroProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  callToAction?: string;
  callToAction2?: string;
  image?: {
    src: string;
    alt: string;
    blurDataURL?: string;
  };
  scrollTargetId?: string;
  scrollTargetId2?: string;
};

const Hero = ({
  title,
  subtitle,
  tagline,
  callToAction,
  callToAction2,
  image,
  scrollTargetId,  // Sektsiooni ID, kuhu keritakse
  scrollTargetId2, // Teine sektsiooni ID, kuhu keritakse
}: HeroProps) => {
  const t = useTranslations('IndexPage');

  const handleScroll = (targetId: string | undefined) => {
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        const targetPosition = section.offsetTop;
        smoothScroll(targetPosition, 1000); // 1000 ms duration for the scroll
      }
    }
  };

  function smoothScroll(targetPosition: number, duration: number) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      // Kohandatud easeInOutCubic funktsioon
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }

  return (
    <section className="relative bg-secondary text-primary-foreground" id="hero" role="banner" aria-labelledby="hero-title">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E57373', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#E57373', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#E57373', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#rainbow-gradient)" d="M0,64 C480,192 960,64 1440,192 L1440,320 L0,320 Z" />
        </svg>
        <div className="absolute left-0 top-0 h-[20500px] w-[20500px] translate-x-[-42.5%] rounded-full bg-primary lg:h-[10250px] lg:w-[10250px]" />
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
                    {callToAction && (
                      <Button
                        onClick={() => handleScroll(scrollTargetId)}  // Kasuta kohandatud kerimisfunktsiooni
                        variant="secondary"
                        className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                      >
                        {callToAction}
                      </Button>
                    )}
                    {callToAction2 && (
                      <Button
                        onClick={() => handleScroll(scrollTargetId2)}  // Kasuta kohandatud kerimisfunktsiooni
                        variant="highlight"
                        className="shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                      >
                        {callToAction2}
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
                    blurDataURL={image.blurDataURL || 'yourBase64EncodedImage'}
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
