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
};

const Headline = ({ header, containerClass, titleClass, subtitleClass }: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;

  return (
    <div className={twMerge('mb-6', containerClass)}>
      {tagline && (
        <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
          {tagline}
        </p>
      )}
      {title && (
        <h2 className={twMerge('font-heading mb-4 font-bold tracking-tight', titleClass, {
          'text-left': position === 'left',
          'text-right': position === 'right',
          'text-center': position !== 'left' && position !== 'right',
        })}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={twMerge('mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400', subtitleClass, {
          'text-left': position === 'left',
          'text-right': position === 'right',
          'text-center': position !== 'left' && position !== 'right',
        })}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Headline;
