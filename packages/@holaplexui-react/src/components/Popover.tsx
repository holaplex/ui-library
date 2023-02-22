import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

export function PopoverBox({
  triggerButton,
  elements,
  children,
}: {
  triggerButton: JSX.Element;
  elements?: JSX.Element[];
  children?: ReactNode;
}) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button as="div">{triggerButton}</Popover.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className={clsx('absolute z-20 w-auto', 'popover-panel')}>
              <div className="overflow-hidden popover-content">
                <>
                  {elements && (
                    <ul className="popover-elements">
                      {elements.map((element) => (
                        <li key={element.key} className="cursor-pointer">
                          {element}
                        </li>
                      ))}
                    </ul>
                  )}
                  {!elements && children && { children }}
                </>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
