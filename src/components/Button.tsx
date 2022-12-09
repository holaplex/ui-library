import clsx from 'clsx';
import { useMemo } from 'react';
import Spinner from './Spinner';

export enum ButtonBackground {
  White = 'bg-white',
  Black = 'bg-black',
  Slate = 'bg-gray-800',
  Cell = 'bg-gray-900',
}

export enum ButtonColor {
  White = 'text-white',
  Gray = 'text-gray-300 hover:text-white group-focus:text-white disabled:text-gray-300',
  Slate = 'text-gray-800',
}

export enum ButtonSize {
  Tiny = 'tiny',
  Small = 'small',
  Large = 'large',
}

interface ButtonProps {
  variant?: 'default' | 'secondary' | 'success' | 'failure' | 'link';
  size?: 'small' | 'medium' | 'large';
  border: 'circle' | 'rounded' | 'square';
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactElement;
  onClick?: () => any;
  disabled?: boolean;
  circle?: boolean;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children?: any;
}

const Button = ({
  variant = 'default',
  border = 'rounded',
  size = 'large',
  loading = false,
  block = false,
  icon,
  onClick,
  disabled = false,
  circle = false,
  htmlType = 'button',
  className,
  children,
}: ButtonProps): JSX.Element => {
  const spinnerSize = useMemo(() => {
    switch (size) {
      case 'small':
        return '10px';
      case 'medium':
        return '15px';
      case 'large':
        return '20px';
      default:
        return '15px';
    }
  }, [size]);

  const spinnerColor = useMemo(() => {
    switch (variant) {
      case 'default':
        return '#17161C';
      case 'secondary':
        return '#bfbfc3';
      case 'success':
        return '#ffffff';
      case 'failure':
        return '#ffffff';
      case 'link':
        return '#1f75cb';
      default:
        return '#ffffff';
    }
  }, [variant]);

  const buttonColor = useMemo(() => {
    switch (variant) {
      case 'default':
        return 'bg-button-default text-white';
      case 'secondary':
        return 'bg-button-secondary text-black';
      case 'link':
        return 'bg-none text-button-default';
      case 'success':
        return 'bg-button-success text-white';
      case 'failure':
        return 'bg-button-failure text-white';
    }
  }, [variant]);

  return (
    <button
      className={clsx(
        clsx,
        'group flex grow-0 items-center justify-center rounded-full text-center font-bold',
        className,
        buttonColor,
        {
          'rounded-md': border === 'rounded',
          'rounded-full': border === 'circle',
          'rounded-none': border === 'square',
          'w-full': block,
          'py-1 px-2 text-sm': size === 'small' || size === 'medium',
          'py-2 px-4': size === 'large',
          'disabled:opacity-50': disabled,
          'px-0 py-0': circle,
        }
      )}
      disabled={disabled}
      type={htmlType}
      onClick={onClick}
    >
      <div
        className={clsx(
          'flex h-full w-full grow-0 items-center justify-center gap-1 rounded-full text-center',
          {
            'py-1 px-4 text-sm': size === 'small',
            'py-2 px-5 text-base': size === 'medium',
            'py-2 px-6 text-lg': size === 'large',
          }
        )}
      >
        {loading && (
          <Spinner
            height={spinnerSize}
            width={spinnerSize}
            color={spinnerColor}
            className="inline aspect-square mr-2"
          />
        )}
        {icon && icon}
        {children && <span>{children}</span>}
      </div>
    </button>
  );
};

export default Button;
