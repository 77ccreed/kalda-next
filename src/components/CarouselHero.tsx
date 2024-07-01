"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import NavigationLink from '@/components/NavigationLink';

type CarouselHeroProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  callToAction?: string;
  callToAction2?: string;
  callToActionLink?: string;
  callToActionLink2?: string;
  images: { src: string; alt: string; width: number; height: number }[];
};

const CarouselHero = ({
  title,
  subtitle,
  tagline,
  callToAction,
  callToAction2,
  callToActionLink,
  callToActionLink2,
  images
}: CarouselHeroProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="relative bg-secondary text-primary-foreground" id="carousel-hero" role="banner" aria-labelledby="hero-title">
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
            <div className="block flex-1 items-center md:flex">
              <div className="relative m-auto h-full max-w-4xl">
                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent className="-ml-4">
                    {images.map((image, index) => (
                      <CarouselItem key={index} className="pl-4">
                        <Card className="w-full h-full">
                          <CardContent className="p-0">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className="rounded-md object-cover drop-shadow-2xl"
                              priority
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
                <div className="flex justify-between items-center md:hidden mt-4">
                  <Button
                    onClick={() => api?.scrollPrev()}
                    className="p-2 bg-primary text-primary-foreground rounded-full"
                  >
                    Prev
                  </Button>
                  <Button
                    onClick={() => api?.scrollNext()}
                    className="p-2 bg-primary text-primary-foreground rounded-full"
                  >
                    Next
                  </Button>
                </div>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselHero;
