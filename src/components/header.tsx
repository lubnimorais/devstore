import Link from 'next/link';

import Image from 'next/image';

import { Search } from 'lucide-react';
import { CartWidget } from './cart-widget';

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="font-extrabold text-2xl text-white">
          devstore
        </Link>

        <form className="w-[320px] flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="h-5 w-5 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
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
