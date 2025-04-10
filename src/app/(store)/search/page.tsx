import Image from 'next/image';

import Link from 'next/link';

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={'/product/moletom-neve-stop-learning'}
          className="group flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden relative"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="h-12 max-w-[280px] absolute bottom-10 right-10 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">Moletom Never Stop Leaning</span>

            <span className="h-full flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          href={'/product/moletom-neve-stop-learning'}
          className="group flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden relative"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="h-12 max-w-[280px] absolute bottom-10 right-10 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">Moletom Never Stop Leaning</span>

            <span className="h-full flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          href={'/product/moletom-neve-stop-learning'}
          className="group flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden relative"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="h-12 max-w-[280px] absolute bottom-10 right-10 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">Moletom Never Stop Leaning</span>

            <span className="h-full flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
