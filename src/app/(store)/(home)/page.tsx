import type { Metadata } from 'next';
import Link from 'next/link';

import Image from 'next/image';

import { api } from '@/data/api';

import type { IProduct } from '@/data/types/product';

export const metadata: Metadata = {
  title: 'Home',
};

async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const products = await response.json();

  return products;
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="max-h-[860px] grid grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden relative"
      >
        <Image
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="h-12 max-w-[280px] absolute bottom-28 right-28 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>

          <span className="h-full flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden relative"
          >
            <Image
              src={product.image}
              width={920}
              height={920}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="h-12 max-w-[280px] absolute bottom-10 right-10 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>

              <span className="h-full flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
