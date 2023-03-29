import clsx from 'clsx';

interface SpinnerProps {
  variant?: string;
  className?: string;
}

export const Spinner = ({ variant, className }: SpinnerProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className={clsx(clsx, className, variant, 'spinner')}></div>
    </div>
  );
};
