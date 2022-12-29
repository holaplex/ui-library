import clsx from 'clsx';

interface SpinnerProps {
  color?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

export const Spinner = ({ color, height, width, className }: SpinnerProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          clsx,
          className,
          'spinner-border animate-spin inline-block border-1 rounded-full text-gray-600'
        )}
        style={{
          width: width || 32,
          height: height || 32,
          color: color,
        }}
      ></div>
    </div>
  );
};
