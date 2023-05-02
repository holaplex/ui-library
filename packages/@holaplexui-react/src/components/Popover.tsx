import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

export function PopoverBox({
  triggerButton,
  elements,
  popperPlacement = 'auto',
  children,
}: {
  triggerButton: JSX.Element;
  elements?: JSX.Element[];
  popperPlacement?:
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'bottom'
    | 'right'
    | 'left';
  children?: ReactNode;
}) {
  let [referenceElement, setReferenceElement] = useState<any>();
  let [popperElement, setPopperElement] = useState<any>();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: popperPlacement,
  });

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
              className={clsx('absolute w-auto', 'popover-panel')}
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
