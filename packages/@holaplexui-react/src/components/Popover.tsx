import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

export function PopoverBox({
  triggerButton,
  elements,
  children,
}: {
  triggerButton: JSX.Element;
  elements?: JSX.Element[];
  children?: ReactNode;
}) {
  let [referenceElement, setReferenceElement] = useState<any>();
  let [popperElement, setPopperElement] = useState<any>();
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button as="div" ref={setReferenceElement}>
            {triggerButton}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className={clsx('absolute z-20 w-auto', 'popover-panel')}
            >
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
