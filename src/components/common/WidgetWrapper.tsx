import { twMerge } from 'tailwind-merge';
import Background from './Background';

type WidgetWrapperProps = {
  children: React.ReactNode;
  id?: string;
  hasBackground?: boolean;
  containerClass?: string;
};

const WidgetWrapper = ({ children, id, hasBackground = false, containerClass }: WidgetWrapperProps) => (
  <section id={id} className="relative not-prose scroll-mt-[72px]">
    <Background hasBackground={hasBackground} />
    <div className={twMerge('relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default', containerClass)}>
      {children}
    </div>
  </section>
);

export default WidgetWrapper;
