import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type CallToActionType = {
  text: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  targetBlank?: boolean;
};

type LinkOrButton = {
  callToAction: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction;

  return (
    <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
      {targetBlank ? (
        <Link
          className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
          {text}
        </Link>
      ) : (
        <Link className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)} href={href}>
          {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
          {text}
        </Link>
      )}
    </div>
  );
};

export default CTA;
