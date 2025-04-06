import type { NextRequest } from 'next/server';

import { z as zod } from 'zod';

import data from '../data.json';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const slugProductQueryParamsSchema = zod.object({
    q: zod.string(),
  });

  const { q } = slugProductQueryParamsSchema.parse({
    q: searchParams.get('q'),
  });

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(q.toLocaleLowerCase());
  });

  return Response.json(products);
}
