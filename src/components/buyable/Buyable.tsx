import { useState } from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Modal from '../modal/Modal';

interface BuyableData {
  nft: {
    name: string;
    image: string;
    moonrankCollection: string;
    moonrankCollectionTrends?: { floor1d: string };
    listingsCount: number;
    lowestListingPrice: number;
  };
  auctionHouse: {
    fee: number;
  };
  viewer?: {
    solBalance: number;
  };
}

interface RenderProps {
  buyNow: (mintAddress: string) => void;
  children: any;
}

interface BuyableProps {
  data?: BuyableData;
  connected?: boolean;
  loading: boolean;
  buying?: boolean;
  login: () => Promise<void>;
  openBuy: (mintAddress: string) => Promise<void>;
  handleBuy: () => Promise<void>;
  closeBuy: () => void;
  text: {
    modalTitle?: string;
    buyEarn?: string;
    floorPrice?: string;
    listPrice?: string;
    marketplaceFee?: string;
    currentBalance?: string;
    buyNowButton?: string;
    cancelButton?: string;
    connectToBuyButton?: string;
  };
  children: (args: RenderProps) => any;
}

export function Buyable({
  data,
  connected = false,
  loading,
  buying = false,
  login,
  openBuy,
  handleBuy,
  closeBuy,
  text = {
    modalTitle: 'Buy now',
    buyNowButton: 'Buy now and claim reward',
    buyEarn: 'Buy and earn',
    floorPrice: 'Current floor price',
    listPrice: 'Current listed price',
    marketplaceFee: 'Marketplace fee',
    currentBalance: 'Current wallet balance',
    cancelButton: 'Cancel',
    connectToBuyButton: 'Connect to purchase',
  },
  children,
}: BuyableProps) {
  const [open, setOpen] = useState(false);
  const openBuyNow = (mintAddress: string) => {
    openBuy(mintAddress);
    setOpen(true);
  };

  return (
    <>
      {children({
        buyNow: openBuyNow,
        children,
      })}
      <Modal title={text.modalTitle} open={open} setOpen={setOpen}>
        <div className="mt-6 flex flex-col gap-6">
          {loading ? (
            <>
              <section className="flex flex-row gap-4">
                <div className="h-12 w-12 animate-pulse rounded-md bg-gray-800" />
                <div className="flex flex-col justify-between gap-2">
                  <p className="h-5 w-40 animate-pulse rounded-md bg-gray-800" />
                  <p className="h-4 w-32 animate-pulse rounded-md bg-gray-800" />
                </div>
              </section>
              <section id={'loading-rewards'}>
                <div className="h-10 rounded-md bg-primary-600 bg-opacity-50" />
              </section>
              <section id={'loading-prices'} className="flex flex-col gap-2">
                <div className="flex flex-row justify-between gap-2">
                  <div className="h-6 w-1/2 animate-pulse rounded-md bg-gray-800" />
                  <div className="h-6 w-1/5 animate-pulse rounded-md bg-gray-800" />
                </div>
                <div className="flex flex-row justify-between gap-2">
                  <div className="h-6 w-1/2 animate-pulse rounded-md bg-gray-800" />
                  <div className="h-6 w-1/5 animate-pulse rounded-md bg-gray-800" />
                </div>
                <div className="flex flex-row justify-between gap-2">
                  <div className="h-6 w-1/2 animate-pulse rounded-md bg-gray-800" />
                  <div className="h-6 w-1/5 animate-pulse rounded-md bg-gray-800" />
                </div>
                <div className="flex flex-row justify-between gap-2">
                  <div className="h-6 w-1/2 animate-pulse rounded-md bg-gray-800" />
                  <div className="h-6 w-1/5 animate-pulse rounded-md bg-gray-800" />
                </div>
              </section>
              <section id={'loading-buttons'} className="flex flex-col gap-4">
                <Button border="rounded" loading={true} />
                <Button border="rounded" loading={true} />
              </section>
            </>
          ) : (
            <div className="flex flex-col gap-6">
              <section className="flex flex-row gap-4">
                <img
                  src={data?.nft.image}
                  alt={data?.nft.name}
                  className="h-12 w-12 rounded-md object-cover text-sm"
                />
                <div className="flex flex-col justify-between gap-2">
                  <p className="text-base font-medium text-white">{data?.nft.name}</p>
                  <p className="text-sm font-semibold text-gray-300">
                    {data?.nft.moonrankCollection}
                  </p>
                </div>
              </section>
              <section>
                <div className="flex flex-row items-center justify-between rounded-md bg-primary-600 p-4">
                  <img
                    src="/images/nightmarket.svg"
                    className="h-5 w-auto object-fill"
                    alt="night market logo"
                  />
                  <p>
                    {text.buyEarn} <span className="text-primary-700">SAUCE</span>
                  </p>
                </div>
              </section>
              <section id={'prices'} className="flex flex-col gap-2">
                {data?.nft.moonrankCollectionTrends && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.floorPrice}</p>
                    <p className="flex flex-row items-center text-base font-medium text-gray-300">
                      <Icon.Sol /> {data?.nft.moonrankCollectionTrends?.floor1d}
                    </p>
                  </div>
                )}
                {data && data?.nft.listingsCount > 0 && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.listPrice}</p>
                    <p className="flex flex-row items-center text-base font-medium text-gray-300">
                      <Icon.Sol /> {data?.nft.lowestListingPrice}
                    </p>
                  </div>
                )}
                <div className="flex flex-row justify-between">
                  <p className="text-base font-medium text-gray-300">{text.marketplaceFee}</p>
                  <p className="text-base font-medium text-gray-300">{data?.auctionHouse.fee}%</p>
                </div>
                {data?.viewer && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.currentBalance}</p>
                    <p className="flex flex-row items-center text-base font-medium text-gray-300">
                      <Icon.Sol /> {data?.viewer?.solBalance}
                    </p>
                  </div>
                )}
              </section>
              <section className="flex flex-col gap-4">
                {connected ? (
                  <>
                    <Button
                      className="font-semibold"
                      border="rounded"
                      block
                      loading={buying}
                      disabled={buying}
                      onClick={handleBuy}
                    >
                      {text.buyNowButton}
                    </Button>
                    <Button
                      className="font-semibold"
                      border="rounded"
                      block
                      onClick={() => {
                        closeBuy();
                        setOpen(false);
                      }}
                      disabled={buying}
                    >
                      {text.cancelButton}
                    </Button>
                  </>
                ) : (
                  <Button onClick={login} className="font-semibold" border="rounded">
                    {text.connectToBuyButton}
                  </Button>
                )}
              </section>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
