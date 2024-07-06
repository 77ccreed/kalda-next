import React from 'react';
import Headline from './common/Headline';
import WidgetWrapper from './common/WidgetWrapper';
import ItemTeam from './ItemTeam';

type TeamProps = {
  header?: {
    title: string;
    subtitle?: string;
    tagline?: string;
    position?: 'left' | 'center' | 'right';
  };
  teams: {
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
  }[];
  id?: string;
  hasBackground?: boolean;
};

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="py-20 bg-primary mb-2">
    {header && (
      <Headline
        header={header}
        containerClass="mb-8 md:mb-12"
        titleClass="text-4xl md:text-5xl text-primary-foreground"
        subtitleClass="mt-4 text-xl text-primary-foreground"
        taglineClass="text-secondary"
      />
    )}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {teams.map(({ name, occupation, image, items }, index) => (
          <div key={`item-team-${index}`} className="relative w-full max-w-sm mx-auto mt-7">
            <ItemTeam
              name={name}
              occupation={occupation}
              image={image}
              items={items}
              containerClass="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg p-10 pt-24"
              imageClass="w-36 h-36"
              panelClass="text-center mt-4"
              nameClass="text-2xl font-semibold text-dark"
              occupationClass="text-md text-gray-600"
              itemsClass="flex justify-center space-x-4 mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default Team;
