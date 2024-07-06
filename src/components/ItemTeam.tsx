import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TeamMember = {
  name: string;
  occupation: string;
  image: {
    src: string;
    alt: string;
  };
  items: {
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  containerClass?: string;
  imageClass?: string;
  panelClass?: string;
  nameClass?: string;
  occupationClass?: string;
  itemsClass?: string;
};

const ItemTeam = ({
  name,
  occupation,
  image,
  items,
  containerClass,
  imageClass,
  panelClass,
  nameClass,
  occupationClass,
  itemsClass,
}: TeamMember) => {
  return (
    <div className={twMerge('relative bg-white rounded-lg shadow-lg p-6 pt-24 transition-shadow hover:shadow-xl', containerClass)}>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-36 h-36 rounded-full ring-4 ring-gray-300 overflow-hidden">
        <Image
          src={image.src}
          width={144}
          height={144}
          alt={image.alt}
          className={twMerge('rounded-full object-cover', imageClass)}
        />
      </div>
      <div className={twMerge('mt-10 text-center', panelClass)}>
        <h3 className={twMerge('text-2xl font-bold text-dark mb-2', nameClass)}>{name}</h3>
        <p className={twMerge('text-md text-gray-600 mb-4', occupationClass)}>{occupation}</p>
        <ul className={twMerge('flex justify-center space-x-4', itemsClass)}>
          {items &&
            items.map(
              ({ title, href, icon: Icon }, index) =>
                Icon &&
                href && (
                  <li key={`team-${index}`} className="flex items-center justify-center w-10 h-10 text-primary-700 hover:text-primary-900 transition-colors">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title as string}
                      className="flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  </li>
                ),
            )}
        </ul>
      </div>
    </div>
  );
};

export default ItemTeam;
