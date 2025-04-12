import { api } from '@/data/api';
import type { IProduct } from '@/data/types/product';
import Image from 'next/image';

import Link from 'next/link';

import { redirect } from 'next/navigation';

interface ISearchProps {
  searchParams: Promise<{ q: string }>;
}

async function searchProduct(query: string): Promise<IProduct[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const products = await response.json();

  return products;
}

export default async function SearchPage({ searchParams }: ISearchProps) {
  const { q: query } = await searchParams;

  if (!query) {
    redirect('/');
  }

  const products = await searchProduct(query);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden relative"
            >
              <Image
                src={product.image}
                width={480}
                height={480}
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
    </div>
  );
}
