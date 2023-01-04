import clsx from 'clsx';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  LegacyRef,
  InputHTMLAttributes,
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
    <label className='form-label' {...props}>
      <span className='form-label-text'>{name}</span>
      {children}
    </label>
  );
}

interface FormErrorProps {
  message?: string;
}

function FormError({ message }: FormErrorProps): JSX.Element | null {
  if (message) {
    return <p className='form-error'>{message}</p>;
  }

  return null;
}

Form.Error = FormError;

Form.Label = FormLabel;

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
    <div className={clsx('form-input', { 'focus-within:form-input-error': error }, className)}>
      {icon && icon}
      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        className={clsx('w-full bg-transparent', { 'pl-2': icon })}
      />
    </div>
  );
});

Form.Input = FormInput;
