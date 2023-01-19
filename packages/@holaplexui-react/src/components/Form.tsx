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
}

function FormLabel({ name, className, children, ...props }: FormLabelProps): JSX.Element {
  return (
    <label className={clsx('form-label', className)} {...props}>
      <span className="form-label-text">{name}</span>
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
    <div
      className={clsx(
        'form-input-container',
        { 'focus-within:form-input-error': error },
        className
      )}
    >
      {icon && <div className="form-input-icon-container">{icon}</div>}

      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        type="text"
        className={clsx('form-input', {
          'ml-1': icon,
        })}
      />
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
    <div
      className={clsx(
        'form-input-container',
        { 'focus-within:form-input-error': error },
        className
      )}
    >
      {icon && <div className="form-input-icon-container">{icon}</div>}

      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        type={showPassword ? 'text' : 'password'}
        className={clsx('form-input', {
          'ml-1': icon,
          'mr-1': showPasswordIcon && hidePasswordIcon,
        })}
      />

      {showPasswordIcon && hidePasswordIcon && (
        <div
          className="form-show-password-container"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? showPasswordIcon : hidePasswordIcon}
        </div>
      )}
    </div>
  );
});

Form.Password = FormPassword;
