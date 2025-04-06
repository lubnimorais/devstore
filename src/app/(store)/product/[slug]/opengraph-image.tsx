// converte HTML em imagem
import { ImageResponse } from 'next/og';

import { api } from '@/data/api';
import type { IProduct } from '@/data/types/product';

import { env } from '@/env';

// Image metadata
export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

interface IProductRouteParamsProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<IProduct> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const product = await response.json();

  return product;
}

// Image generation
export default async function OgImage({ params }: IProductRouteParamsProps) {
  const { slug } = await params;

  const product = await getProduct(slug);

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#09090b',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={productImageURL}
        style={{ width: '100%' }}
        alt={product.title}
      />
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
