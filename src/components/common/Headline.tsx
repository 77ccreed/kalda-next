import { twMerge } from 'tailwind-merge';

type HeadlineProps = {
  header: {
    title: string;
    subtitle?: string;
    tagline?: string;
    position?: 'left' | 'center' | 'right';
  };
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  taglineClass?: string;
};

const Headline = ({ header, containerClass, titleClass, subtitleClass, taglineClass }: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;

  // Determine text alignment classes based on the position
  const textAlignClass = position === 'left' ? 'text-left' : position === 'right' ? 'text-right' : 'text-center';

  return (
    <div className={twMerge(`mb-6 md:mb-12 ${textAlignClass}`, containerClass)}>
      {tagline && (
        <p className={twMerge(`text-base font-semibold uppercase tracking-wide text-secondary ${textAlignClass}`, taglineClass)}>
          {tagline}
        </p>
      )}
      {title && (
        <h2 className={twMerge(`font-heading mb-4 text-4xl font-bold tracking-tight md:text-5xl text-primary-foreground ${textAlignClass}`, titleClass)}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={twMerge(`mx-auto mt-4 max-w-3xl text-xl text-primary-foreground ${textAlignClass}`, subtitleClass)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Headline;
