import clsx from 'clsx';
import { ReactElement, useMemo } from 'react';
import { Spinner } from './Spinner';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'failure' | 'link';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  block?: boolean;
  icon?: ReactElement;
  spinner?: ReactElement;
  onClick?: () => any;
  disabled?: boolean;
  circle?: boolean;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children?: ReactElement | string;
}

export const Button = ({
  variant = 'primary',
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
  const spinnerVariant = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'spinner-primary';
      case 'secondary':
        return 'spinner-secondary';
      case 'success':
        return 'spinner-success';
      case 'failure':
        return 'spinner-failure';
      case 'link':
        return 'spinner-link';
      default:
        return 'spinner-primary';
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
        'group flex grow-0 items-center justify-center text-center gap-2',
        buttonVariant,
        {
          'w-full': block,
          'disabled:opacity-50': disabled,
          'px-0 py-0': circle,
          'button-small': size === 'small',
          'button-medium': size === 'medium',
          'button-large': size === 'large',
        },
        className
      )}
      disabled={disabled}
      type={htmlType}
      onClick={onClick}
    >
      {loading &&
        (spinner ? spinner : <Spinner variant={spinnerVariant} className="inline aspect-square" />)}
      {icon && icon}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
