import clsx from 'clsx';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  LegacyRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';

export function Form({
  children,
  ...props
}: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>): JSX.Element {
  return <form {...props}>{children}</form>;
}

interface FormLabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  name: string;
  asideComponent?: JSX.Element;
}

function FormLabel({
  name,
  asideComponent,
  className,
  children,
  ...props
}: FormLabelProps): JSX.Element {
  return (
    <label className={clsx('form-label', className)} {...props}>
      <div className="flex w-full justify-between items-center">
        <span className="form-label-text">{name}</span>
        {asideComponent}
      </div>
      {children}
    </label>
  );
}
Form.Label = FormLabel;

interface FormErrorProps {
  message?: string;
}

function FormError({ message }: FormErrorProps): JSX.Element | null {
  if (message) {
    return <p className="form-error">{message}</p>;
  }

  return null;
}

Form.Error = FormError;

interface FormInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  icon?: JSX.Element;
  error?: FieldError;
}

const FormInput = forwardRef(function FormInput(
  { className, icon, error, ...props }: FormInputProps,
  ref
) {
  return (
    <div className={clsx('relative', { 'focus-within:form-input-error': error }, className)}>
      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        type="text"
        className={clsx(
          'w-full block',
          {
            'pl-12': icon,
          },
          'form-input'
        )}
      />
      {icon && (
        <div
          className={clsx(
            'absolute top-1/2 left-0 transform -translate-y-1/2 ml-1',
            'form-input-icon-container'
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );
});

Form.Input = FormInput;

interface FormPasswordProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  icon?: JSX.Element;
  showPasswordIcon?: JSX.Element;
  hidePasswordIcon?: JSX.Element;
  error?: FieldError;
}

const FormPassword = forwardRef(function FormPassword(
  { className, icon, showPasswordIcon, hidePasswordIcon, error, ...props }: FormPasswordProps,
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={clsx('relative', { 'focus-within:form-input-error': error }, className)}>
      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        type={showPassword ? 'text' : 'password'}
        className={clsx(
          'w-full block',
          {
            'pl-12': icon,
            'pr-12': showPasswordIcon && hidePasswordIcon,
          },
          'form-input'
        )}
      />
      {icon && (
        <div
          className={clsx(
            'absolute top-1/2 left-0 transform -translate-y-1/2 ml-1',
            'form-input-icon-container'
          )}
        >
          {icon}
        </div>
      )}

      {showPasswordIcon && hidePasswordIcon && (
        <div
          className={clsx(
            'absolute top-1/2 right-0 transform -translate-y-1/2 mr-1',
            'form-show-password-container'
          )}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? showPasswordIcon : hidePasswordIcon}
        </div>
      )}
    </div>
  );
});

Form.Password = FormPassword;
