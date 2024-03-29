import clsx from 'clsx';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  LegacyRef,
  InputHTMLAttributes,
  useState,
  Fragment,
  TextareaHTMLAttributes,
} from 'react';
import { Listbox, RadioGroup } from '@headlessui/react';
import { FieldError } from 'react-hook-form';
import { Icon } from './Icon';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

export function Form({
  children,
  ...props
}: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>): JSX.Element {
  return <form {...props}>{children}</form>;
}

export enum Placement {
  Right,
  Left,
  Top,
  Bottom,
}

interface FormLabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  name: string | JSX.Element;
  placement?: Placement;
  peerClassName?: string;
  asideComponent?: JSX.Element;
}

function FormLabel({
  name,
  placement = Placement.Top,
  asideComponent,
  peerClassName,
  className,
  children,
  ...props
}: FormLabelProps): JSX.Element {
  return (
    <label
      className={clsx(
        'flex',
        {
          'flex-col': placement === Placement.Bottom,
          'flex-col-reverse': placement === Placement.Top,
          'flex-row-reverse items-center': placement === Placement.Left,
          'flex-row items-center': placement === Placement.Right,
        },
        'form-label',
        className
      )}
      {...props}
    >
      {children}
      <div className={clsx('flex w-full justify-between items-center', peerClassName)}>
        <span className="form-label-text">{name}</span>
        {asideComponent}
      </div>
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
  type?: string;
}

const FormInput = forwardRef(function FormInput(
  { className, icon, error, type, ...props }: FormInputProps,
  ref
) {
  return (
    <div className={clsx('relative', { 'focus-within:form-input-error': error }, className)}>
      <input
        {...props}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        type={type ?? 'text'}
        className={clsx(
          'w-full',
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

interface FormTextAreaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string;
  error?: FieldError;
}

const FormTextArea = forwardRef(function FormTextArea(
  { className, error, ...props }: FormTextAreaProps,
  ref
) {
  return (
    <div className={clsx('relative', { 'focus-within:form-textarea-error': error }, className)}>
      <textarea
        {...props}
        ref={ref as LegacyRef<HTMLTextAreaElement> | undefined}
        className={clsx('w-full', 'form-textarea')}
      />
    </div>
  );
});

Form.TextArea = FormTextArea;

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
          'w-full',
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
            'absolute right-0 top-1/2 -translate-y-1/2 mr-1',
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

interface FormSelectProps {
  onChange: (item: any) => void;
  value: any;
  ref?: React.MutableRefObject<HTMLSelectElement | null>;
  multiple?: boolean;
  className?: string;
  icon?: JSX.Element;
  children: JSX.Element[];
}

function FormSelect<T>({ className, multiple, ref, children, onChange, value }: FormSelectProps) {
  return (
    <div className={clsx('w-full relative', className)}>
      <Listbox
        value={value}
        multiple={multiple}
        by="id"
        onChange={(value) => {
          onChange(value);

          if (ref?.current) {
            ref.current.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }}
      >
        {children}
      </Listbox>
    </div>
  );
}

Form.Select = FormSelect;

interface FormSelectButtonProps {
  icon?: JSX.Element;
  children: JSX.Element | string | undefined | number;
  placeholder?: string | JSX.Element;
  dropdown?: JSX.Element;
}
function FormSelectButton({
  children,
  icon,
  placeholder = 'select an option',
  dropdown = <Icon.ChevronDown />,
}: FormSelectButtonProps): JSX.Element {
  return (
    <Listbox.Button
      className={clsx('w-full inline-block', 'form-select-button', {
        'pl-12': icon,
      })}
    >
      {children ? (
        <span>{children}</span>
      ) : (
        <span className="form-select-button-placeholder">{placeholder}</span>
      )}
      <div
        className={clsx(
          'absolute top-1/2 right-0 transform -translate-y-1/2 stroke-black',
          'form-select-button-dropdown'
        )}
      >
        {dropdown}
      </div>
    </Listbox.Button>
  );
}

FormSelect.Button = FormSelectButton;

interface FormSelectOptionsProps {
  children: JSX.Element[];
  className?: string;
}

function FormSelectOptions({ children, className }: FormSelectOptionsProps): JSX.Element {
  return (
    <Listbox.Options
      className={clsx('absolute mt-1 w-full overflow-auto form-select-options', className)}
    >
      {children}
    </Listbox.Options>
  );
}

FormSelect.Options = FormSelectOptions;

interface FormSelectOptionProps<T> {
  key: string;
  children: JSX.Element;
  value: T;
  className?: string;
}

function FormSelectOption<T>({
  key,
  children,
  value,
  className,
}: FormSelectOptionProps<T>): JSX.Element {
  return (
    <Listbox.Option key={key} value={value} as={Fragment}>
      {({ selected, active }) => {
        return (
          <li
            className={clsx(className, 'form-select-option', {
              'form-select-option-selected cursor-default': selected,
              'form-select-option-active': active && !selected,
            })}
          >
            {children}
          </li>
        );
      }}
    </Listbox.Option>
  );
}

FormSelect.Option = FormSelectOption;

interface FormCheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

const FormCheckbox = forwardRef(function FormCheckbox(
  { className, ...props }: FormCheckboxProps,
  ref
) {
  return (
    <input
      {...props}
      ref={ref as LegacyRef<HTMLInputElement> | undefined}
      type="checkbox"
      className={clsx('form-checkbox', className)}
    />
  );
});

Form.Checkbox = FormCheckbox;

interface FormRadioGroupProps {
  children: JSX.Element[];
  className?: string;
}

function FormRadioGroup({ children, className }: FormRadioGroupProps) {
  return <div className={clsx('form-radio-group', className)}>{children}</div>;
}
Form.RadioGroup = FormRadioGroup;

interface FormRadioProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

const FormRadio = forwardRef(function FormRadio({ className, ...props }: FormRadioProps, ref) {
  return (
    <input
      {...props}
      ref={ref as LegacyRef<HTMLInputElement> | undefined}
      type="radio"
      className={clsx('form-radio', className)}
    />
  );
});
FormRadioGroup.Radio = FormRadio;

interface DragDropProps {
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  isDragActive: boolean;
  onChange: any;
  multiple?: boolean;
  children: JSX.Element;
  className?: string;
}

const DragDrop = ({
  getInputProps,
  getRootProps,
  isDragActive,
  onChange,
  multiple = false,
  className,
  children,
}: DragDropProps) => {
  return (
    <div {...getRootProps()} className={clsx('relative', className)}>
      <input
        {...getInputProps({
          onChange,
          multiple,
        })}
      />
      {children}
    </div>
  );
};

Form.DragDrop = DragDrop;

interface DragDropPreviewProps {
  value: File | string;
}

const DragDropPreview = ({ value }: DragDropPreviewProps) => {
  const src: string = value instanceof File ? URL.createObjectURL(value) : value;
  return <img src={src} alt="drag & drop preview" className="dragdrop-preview-image" />;
};
DragDrop.Preview = DragDropPreview;
