type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

const Background = ({ children, hasBackground }: BackgroundProps) => (
  <div className={`absolute inset-0 ${hasBackground ? 'bg-primary dark:bg-slate-800' : 'bg-transparent'}`}>
    {children}
  </div>
);

export default Background;
