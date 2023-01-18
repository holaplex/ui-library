import '../styles/globals.css';
import '@holaplex/ui-library-react/dist/index.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='flex h-screen flex-col overflow-hidden bg-gray-700 font-sans text-gray-900 antialiased'>
        <header className='relative z-10 flex flex-shrink-0 items-center justify-between border-b border-gray-200 bg-gray-700 px-4 py-4 sm:px-6 lg:px-8'>
          <Link href='/' className='text-white font-semibold'>
            👋 Holaplex UI
          </Link>
        </header>
        <main className='flex-1 overflow-auto bg-gray-50 px-6'>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
