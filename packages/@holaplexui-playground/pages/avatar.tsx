import { Avatar, AvatarSize } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      <span className='font-bold underline'>Avatar</span>
      Tiny
      <Avatar size={AvatarSize.Tiny} />
      Small
      <Avatar size={AvatarSize.Small} />
      Standard
      <Avatar size={AvatarSize.Standard} />
      Large
      <Avatar size={AvatarSize.Large} />
      Jumbo
      <Avatar size={AvatarSize.Jumbo} />
      Gigantic
      <Avatar size={AvatarSize.Gigantic} />
    </div>
  );
}
