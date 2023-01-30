import clsx from 'clsx';
import { ReactElement, useMemo } from 'react';
import { Spinner } from './Spinner';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'failure' | 'link';
  size?: 'small' | 'medium' | 'large';
  border?: 'circle' | 'rounded' | 'square';
  loading?: boolean;
  block?: boolean;
  icon?: ReactElement;
  spinner?: ReactElement;
  onClick?: () => any;
  disabled?: boolean;
  circle?: boolean;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children?: ReactElement;
}

export const Button = ({
  variant = 'primary',
  border = 'rounded',
  size = 'medium',
  loading = false,
  block = false,
  icon,
  spinner,
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
      case 'primary':
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

  const buttonVariant = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'button-variant-primary';
      case 'secondary':
        return 'button-variant-secondary';
      case 'tertiary':
        return 'button-variant-tertiary';
      case 'link':
        return 'button-variant-link';
      case 'success':
        return 'button-variant-success';
      case 'failure':
        return 'button-variant-failure';
    }
  }, [variant]);

  return (
    <button
      className={clsx(
        clsx,
        'group flex grow-0 items-center justify-center text-center',
        buttonVariant,
        {
          'rounded-md': border === 'rounded',
          'rounded-full': border === 'circle',
          'rounded-none': border === 'square',
          'w-full': block,
          'py-1 px-2 text-sm': size === 'small' || size === 'medium',
          'py-2 px-4': size === 'large',
          'disabled:opacity-50': disabled,
          'px-0 py-0': circle,
        },
        className
      )}
      disabled={disabled}
      type={htmlType}
      onClick={onClick}
    >
      <div
        className={clsx(
          'flex h-full w-full grow-0 items-center justify-center gap-2 rounded-full text-center',
          {
            'button-small': size === 'small',
            'button-medium': size === 'medium',
            'button-large': size === 'large',
          }
        )}
      >
        {loading &&
          (spinner ? (
            spinner
          ) : (
            <Spinner
              height={spinnerSize}
              width={spinnerSize}
              color={spinnerColor}
              className="inline aspect-square"
            />
          ))}
        {icon && icon}
        {children && <span>{children}</span>}
      </div>
    </button>
  );
};

export default Button;
