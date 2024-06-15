import { twMerge } from 'tailwind-merge';
import { Check } from 'lucide-react';
import CTA from '@/components/common/CTA';

type CallToActionType = {
  text: string;
  href: string;
  targetBlank?: boolean;
};

type ItemProps = {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  callToAction?: CallToActionType;
};

type ItemGridProps = {
  id?: string;
  items: ItemProps[];
  columns?: number;
  defaultIcon?: React.ComponentType<{ className?: string }>;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
};

const ItemGrid = ({
  id,
  items,
  columns = 3,
  defaultIcon: DefaultIcon = Check,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
}: ItemGridProps) => {
  return (
    <>
      {items && (
        <div
          className={twMerge(
            `grid mx-auto gap-8 md:gap-y-12 ${columns === 4
              ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
              : columns === 3
                ? 'lg:grid-cols-3 sm:grid-cols-2'
                : columns === 2
                  ? 'sm:grid-cols-2'
                  : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon: Icon, callToAction }, index) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
              <div className={twMerge('flex flex-row max-w-md', panelClass)}>
                <div className="flex justify-center">
                  {Icon ? (
                    <Icon className={twMerge('w-7 h-7 mr-4', iconClass)} />
                  ) : (
                    <DefaultIcon className={twMerge('w-7 h-7 mr-4', iconClass)} />
                  )}
                </div>
                <div className="mt-0.5">
                  {title && <h3 className={twMerge('text-lg font-medium', titleClass)}>{title}</h3>}
                  {description && (
                    <p className={twMerge('text-gray-600 dark:text-slate-400', descriptionClass)}>{description}</p>
                  )}
                  {callToAction && (
                    <CTA
                      callToAction={callToAction}
                      linkClass={twMerge('mt-3 text-primary font-bold hover:underline cursor-pointer', actionClass)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemGrid;
