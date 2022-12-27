import clsx from 'clsx';
import { useState } from 'react';
import Button from '../button/Button';
import { Form } from '../form/Form';
import Icon from '../icon/Icon';
import Modal from '../modal/Modal';
import { UseFormHandleSubmit, UseFormRegister, FormState } from 'react-hook-form';

export interface OfferForm {
  amount: string;
}

interface OfferableData {
  nft: {
    name: string;
    image: string;
    moonrankCollection: string;
    moonrankCollectionTrends?: { floor1d: string };
    listingsCount: number;
    lowestListingPrice: number;
    purchaseCount: number;
    lastPurchasePrice: number;
  };
  auctionHouse: {
    fee: number;
  };
}

interface RenderProps {
  makeOffer: (mintAddress: string) => void;
  children: any;
}

interface OfferableProps {
  data?: OfferableData;
  connected?: boolean;
  loading: boolean;
  offerSubmitting?: boolean;
  login: () => Promise<void>;
  openOffer: (mintAddress: string) => Promise<void>;
  handleOffer: () => Promise<void>;
  handleSubmitOffer: UseFormHandleSubmit<OfferForm>;
  registerOffer: UseFormRegister<OfferForm>;
  offerFormState: FormState<OfferForm>;
  cancelMakeOffer: () => void;
  text: {
    modalTitle?: string;
    yourOffer?: string;
    offer?: string;
    floorPrice?: string;
    listPrice?: string;
    lastSoldPrice?: string;
    marketplaceFee?: string;
    currentBalance?: string;
    amount?: string;
    cancelButton?: string;
    connectToOfferButton?: string;
  };
  viewer?: {
    solBalance: number;
  };
  viewerOffer?: {
    solPrice: number;
  };
  children: (args: RenderProps) => any;
}

export function Offerable({
  data,
  connected = false,
  loading,
  offerSubmitting = false,
  login,
  openOffer,
  handleOffer,
  handleSubmitOffer,
  registerOffer,
  offerFormState,
  cancelMakeOffer,
  text = {
    modalTitle: 'Make an offer',
    yourOffer: 'Your offer',
    offer: 'Offer',
    floorPrice: 'Current floor price',
    listPrice: 'Current listed price',
    lastSoldPrice: 'Last sold for',
    currentBalance: 'Current wallet balance',
    amount: 'Amount',
    cancelButton: 'Cancel',
    connectToOfferButton: 'Connect to make offers',
  },
  viewer,
  viewerOffer,
  children,
}: OfferableProps) {
  const [open, setOpen] = useState(false);
  const onOpenOffer = (mintAddress: string) => {
    if (!viewer) {
      login();
      return;
    }

    openOffer(mintAddress);
    setOpen(true);
  };

  return (
    <>
      {children({
        makeOffer: onOpenOffer,
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
              <section className="flex flex-col gap-2">
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
              <section>
                <div className="h-10 w-full animate-pulse rounded-md border-2 border-gray-800 bg-gray-900" />
              </section>
              <section className="flex flex-col gap-4">
                <Button loading border="rounded" />
                <Button loading border="rounded" />
              </section>
            </>
          ) : (
            <Form onSubmit={handleSubmitOffer(handleOffer)} className="flex flex-col gap-6">
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
              <section className="flex flex-col gap-2">
                {viewerOffer && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.yourOffer}</p>
                    <p className="flex flex-row items-center  gap-1 text-base font-medium text-gray-300">
                      <Icon.Sol /> {viewerOffer.solPrice}
                    </p>
                  </div>
                )}
                {data?.nft.moonrankCollectionTrends && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.floorPrice}</p>
                    <p className="flex flex-row items-center gap-1 text-base font-medium text-gray-300">
                      <Icon.Sol /> {data?.nft.moonrankCollectionTrends.floor1d}
                    </p>
                  </div>
                )}
                {data && data?.nft.listingsCount > 0 && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.listPrice}</p>
                    <p className="flex flex-row items-center gap-1 text-base font-medium text-gray-300">
                      <Icon.Sol /> {data.nft.lowestListingPrice}
                    </p>
                  </div>
                )}
                {data && data?.nft.purchaseCount > 0 && (
                  <div className="flex flex-row justify-between">
                    <p className="text-base font-medium text-gray-300">{text.lastSoldPrice}</p>
                    <p className="flex flex-row items-center gap-1 text-base font-medium text-gray-300">
                      <Icon.Sol /> {data.nft.lastPurchasePrice}
                    </p>
                  </div>
                )}
                <div className="flex flex-row justify-between">
                  <p className="text-base font-medium text-gray-300">{text.currentBalance}</p>
                  <p className="flex flex-row items-center gap-1 text-base font-medium text-gray-300">
                    <Icon.Sol /> {viewer?.solBalance}
                  </p>
                </div>
              </section>
              {connected ? (
                <>
                  <section>
                    <Form.Label name={text.amount || ''}>
                      {/* Temporarily broke out of component to make it work*/}
                      <div
                        className={clsx(
                          'flex w-full flex-row items-center justify-start rounded-md border border-gray-800 bg-gray-900 p-2 text-white focus-within:border-white focus:ring-0 focus:ring-offset-0',
                          'input'
                        )}
                      >
                        <Icon.Sol />
                        <input
                          {...registerOffer('amount', { required: true })}
                          autoFocus
                          className="w-full bg-transparent pl-2"
                        />
                      </div>
                      {offerFormState.errors.amount?.message && (
                        <p className="whitespace-nowrap text-left text-sm text-red-500">
                          {offerFormState.errors.amount?.message}
                        </p>
                      )}
                    </Form.Label>
                  </section>
                  <section id={'offer-buttons'} className="flex flex-col gap-4">
                    <Button
                      className="font-semibold"
                      border="rounded"
                      block
                      htmlType="submit"
                      disabled={offerSubmitting}
                      loading={offerSubmitting}
                    >
                      {text.offer}
                    </Button>
                    <Button
                      className="font-semibold"
                      block
                      onClick={() => {
                        cancelMakeOffer();
                        setOpen(false);
                      }}
                      disabled={offerSubmitting}
                      border="rounded"
                    >
                      {text.cancelButton}
                    </Button>
                  </section>
                </>
              ) : (
                <Button border="rounded" onClick={login} className="font-semibold">
                  {text.connectToOfferButton}
                </Button>
              )}
            </Form>
          )}
        </div>
      </Modal>
    </>
  );
}
