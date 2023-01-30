import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

export function PopoverBox({
  triggerButton,
  elements,
  forceDirection,
}: {
  triggerButton: JSX.Element;
  elements: JSX.Element[];
  forceDirection?: 'left';
}) {
  return (
    <Popover>
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
        <Popover.Panel
          className={clsx(
            'absolute z-20 translate-y-2 ',
            forceDirection && '-translate-x-[calc(208px-40px)]'
          )}
        >
          <ul className="popover overflow-hidden">
            {elements.map((element) => (
              <li key={element.key} className="cursor-pointer">
                {element}
              </li>
            ))}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
