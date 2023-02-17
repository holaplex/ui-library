import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react';

type ModalProps = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | ((open: boolean) => void);
  short?: boolean;
  title?: string;
  scroll?: boolean;
};

export function Modal(props: ModalProps) {
  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog as="div" className="font-sans" onClose={() => props.setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={clsx(
              'fixed inset-0 z-40',
              'bg-gray-800 bg-opacity-40',
              'transition-opacity duration-500 ease-in-out',
              'flex flex-col items-center justify-center',
              {
                'opacity-100': props.open,
                'opacity-0': !props.open,
                'pointer-events-auto': props.open,
                'pointer-events-none': !props.open,
              }
            )}
          />
        </Transition.Child>

        <div className={clsx('fixed inset-0 z-40 overflow-y-auto')}>
          <div
            className={clsx(
              'flex min-h-full items-center justify-center text-center',
              !props.scroll ? 'p-4' : 'py-4'
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'relative z-40',
                  'modal-content',
                  props.short ? 'sm:max-h-[30rem]' : 'sm:max-h-[50rem]',
                  props.scroll ? 'pt-6' : 'p-6'
                )}
              >
                <button
                  type="button"
                  onClick={() => props.setOpen(false)}
                  className={clsx('absolute z-50', 'modal-close')}
                >
                  <XMarkIcon className="h-4 w-4 text-black" />
                </button>
                {props.title && (
                  <Dialog.Title as="h3" className="modal-title">
                    {props.title}
                  </Dialog.Title>
                )}

                {props.children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
