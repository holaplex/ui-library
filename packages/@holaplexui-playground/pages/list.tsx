import { List, ListGridSize } from '@holaplexui/react';
import Image from 'next/image';
import { useState } from 'react';

interface Nft {
  name: string;
  image: string;
  description: string;
}

interface NftRowProps {
  nft: Nft;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function NftRow({ nft }: NftRowProps) {
  return (
    <div className='flex gap-2 items-center justify-between border-x-2 border-gray-400 px-2'>
      <div className='flex gap-2 items-center justify-between'>
        <img
          width={25}
          height={25}
          className='aspect-square'
          src={nft.image}
          alt={nft.name}
        />
        <span>{nft.name}</span>
      </div>
      <span className='border-l-2 pl-2 border-gray-400'>{nft.description}</span>
    </div>
  );
}

export default function App() {
  const allData: Nft[] = [
    {
      name: 'DeGods',
      image: 'https://blog.mexc.com/wp-content/uploads/2022/09/DeGods.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Y00ts',
      image:
        'https://www.arweave.net/hYO0-FY2v4Aq2GmQMZN48nXi7FhOsBmhpg8IiEfcNMM?ext=png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Bonk',
      image:
        'https://assets.coingecko.com/coins/images/28600/large/bonk.jpg?1672304290',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Abc',
      image:
        'https://solanafloor.ams3.cdn.digitaloceanspaces.com/collections/abc.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Okay Bears',
      image:
        'https://assets-global.website-files.com/623ab58321ca25f489fca9e6/625806c2108239850f495db6_JamaalBear2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Boogle',
      image:
        'https://moon.ly/uploads/nft/921f7c01-a2d5-4d21-917f-3b9e5fff4c25.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Degen',
      image:
        'https://www.nft-degen-score.com/packages/marblecards/nft-degen-score/bin/images/DegenScoreApe-standing-left.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      name: 'Portals',
      image:
        'https://uploads-ssl.webflow.com/6190adde0207043d887665cd/61b40e8d0dfbb2451f5a0f0e_X2nOGQCj_400x400.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ];

  const [data, setData] = useState<Nft[]>(allData.slice(0, 5));

  const [hasMore, setHasMore] = useState(true);

  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <List
        data={data}
        loading={false}
        hasMore={hasMore}
        gap={6}
        grid={{
          [ListGridSize.Default]: [2, 2],
          [ListGridSize.Small]: [2, 2],
          [ListGridSize.Medium]: [2, 3],
          [ListGridSize.Large]: [3, 4],
          [ListGridSize.ExtraLarge]: [4, 6],
          [ListGridSize.Jumbo]: [6, 8]
        }}
        skeleton={() => <div>...</div>}
        onLoadMore={async (inView: boolean) => {
          if (!inView) {
            return;
          }
          await sleep(1000);

          setData(allData);
          setHasMore(false);
        }}
        render={(nft, i) => <NftRow key={nft.name} nft={nft} />}
      />
    </div>
  );
}
