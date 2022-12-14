import clsx from 'clsx';
import React from 'react';

export enum AvatarSize {
  Tiny,
  Small,
  Standard,
  Large,
  Jumbo,
  Gigantic,
}

interface AvatarProps {
  handle?: string;
  src?: string;
  circle?: boolean;
  size: AvatarSize;
}

const firstLast = (word: string) => {
  const result = word[0] + word[word.length - 1];
  return result.toUpperCase();
};

export function Avatar({ src, circle, size, handle }: AvatarProps) {
  return (
    <div
      className={clsx('group relative block overflow-clip', {
        'rounded-full': circle,
        'w-12': size === AvatarSize.Standard,
        'w-16': size === AvatarSize.Large,
        'rounded-md':
          !circle &&
          [AvatarSize.Tiny, AvatarSize.Small, AvatarSize.Standard, AvatarSize.Large].includes(size),
        'rounded-lg': !circle && [AvatarSize.Jumbo, AvatarSize.Gigantic].includes(size),
      })}
    >
      {src ? (
        <img
          src={src}
          alt="avatar"
          className={clsx(
            'aspect-square object-cover',
            'duration-100 ease-out group-hover:origin-center group-hover:scale-105 group-hover:ease-in'
          )}
        />
      ) : (
        <div
          className={clsx(
            'aspect-square',
            'bg-theme-default text-white',
            'font-semibold',
            'duration-100 ease-out group-hover:origin-center group-hover:scale-105 group-hover:ease-in',
            'flex flex-col justify-center items-center',
            {
              'text-xs p-1': size === (AvatarSize.Tiny | AvatarSize.Small),
              'text-base p-2': size === (AvatarSize.Standard | AvatarSize.Large),
              'text-lg': size === (AvatarSize.Jumbo | AvatarSize.Gigantic),
            }
          )}
        >
          {handle ? firstLast(handle) : 'N/A'}
        </div>
      )}
    </div>
  );
}