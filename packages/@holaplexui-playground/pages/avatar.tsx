import { Avatar, AvatarSize, Icon } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      <span className='font-bold underline'>Avatar</span>
      Tiny
      <div className='flex items-center gap-4'>
        <Avatar
          size={AvatarSize.Tiny}
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar
          size={AvatarSize.Tiny}
          circle
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar size={AvatarSize.Tiny} handle='MyAvatar' />
      </div>
      Small
      <div className='flex items-center gap-4'>
        <Avatar
          size={AvatarSize.Small}
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar
          size={AvatarSize.Small}
          circle
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar size={AvatarSize.Small} handle='MyAvatar' />
      </div>
      Standard
      <div className='flex items-center gap-4'>
        <Avatar
          size={AvatarSize.Standard}
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar
          size={AvatarSize.Standard}
          circle
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar size={AvatarSize.Standard} handle='MyAvatar' />
      </div>
      Large
      <div className='flex items-center gap-4'>
        <Avatar
          size={AvatarSize.Large}
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar
          size={AvatarSize.Large}
          circle
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar size={AvatarSize.Large} handle='MyAvatar' />
      </div>
      Jumbo
      <div className='flex items-center gap-4'>
        <Avatar
          size={AvatarSize.Jumbo}
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar
          size={AvatarSize.Jumbo}
          circle
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar size={AvatarSize.Jumbo} handle='MyAvatar' />
      </div>
      Gigantic
      <div className='flex items-center gap-4'>
        <Avatar
          size={AvatarSize.Gigantic}
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar
          size={AvatarSize.Gigantic}
          circle
          src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'
        />
        <Avatar size={AvatarSize.Gigantic} handle='MyAvatar' />
      </div>
    </div>
  );
}
