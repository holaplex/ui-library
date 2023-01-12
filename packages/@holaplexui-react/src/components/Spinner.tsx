import clsx from 'clsx';

interface SpinnerProps {
  color?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

export const Spinner = ({ color, height, width, className }: SpinnerProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(clsx, className, 'spinner-border inline-block animate-spin rounded-full')}
        style={{
          width: width || 32,
          height: height || 32,
          color: color,
        }}
      ></div>
    </div>
  );
};
