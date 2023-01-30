import clsx from 'clsx';

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
  placeholder?: JSX.Element;
  className?: string;
}

const firstLast = (word: string) => {
  const result = word[0] + word[word.length - 1];
  return result.toUpperCase();
};

export function Avatar({ src, circle, size, handle, placeholder, className }: AvatarProps) {
  return (
    <div
      className={clsx(
        'group relative block overflow-clip aspect-square',
        {
          'rounded-full': circle,
          'w-6': size === AvatarSize.Tiny,
          'w-8': size === AvatarSize.Small,
          'w-12': size === AvatarSize.Standard,
          'w-16': size === AvatarSize.Large,
          'w-20': size === AvatarSize.Jumbo,
          'w-24': size === AvatarSize.Gigantic,
          'rounded-md':
            !circle &&
            [AvatarSize.Tiny, AvatarSize.Small, AvatarSize.Standard, AvatarSize.Large].includes(
              size
            ),
          'rounded-lg': !circle && [AvatarSize.Jumbo, AvatarSize.Gigantic].includes(size),
        },
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt="avatar"
          className={clsx(
            'avatar aspect-square object-cover h-full w-full',
            'duration-100 ease-out group-hover:origin-center group-hover:scale-105 group-hover:ease-in',
            {
              'rounded-full': circle,
              'rounded-md':
                !circle &&
                [AvatarSize.Tiny, AvatarSize.Small, AvatarSize.Standard, AvatarSize.Large].includes(
                  size
                ),
              'rounded-lg': !circle && [AvatarSize.Jumbo, AvatarSize.Gigantic].includes(size),
            }
          )}
        />
      ) : placeholder ? (
        <div className="duration-100 ease-out group-hover:origin-center group-hover:scale-105 group-hover:ease-in">
          {placeholder}
        </div>
      ) : (
        <div
          className={clsx(
            'aspect-square',
            'font-semibold',
            'duration-100 ease-out group-hover:origin-center group-hover:scale-105 group-hover:ease-in',
            'flex flex-col justify-center items-center',
            {
              'text-xs p-1': size === (AvatarSize.Tiny | AvatarSize.Small),
              'text-lg p-2': size === (AvatarSize.Standard | AvatarSize.Large),
              'text-3xl p-2': size === (AvatarSize.Jumbo | AvatarSize.Gigantic),
            },
            'avatar-handle'
          )}
        >
          {handle ? firstLast(handle) : ''}
        </div>
      )}
    </div>
  );
}
