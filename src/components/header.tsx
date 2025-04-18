import Link from 'next/link';

import Image from 'next/image';

import { CartWidget } from './cart-widget';
import { SearchForm } from './search-form';
import { Suspense } from 'react';

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="font-extrabold text-2xl text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>

          <Image
            width={24}
            height={24}
            src="https://github.com/lubnimorais.png"
            alt=""
            className="h-6 w-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
