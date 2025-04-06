import { z as zod } from 'zod';

import data from '../data.json';

interface IRouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_: Request, { params }: IRouteParams) {
  const routeParams = await params;

  const slugProductRouteParamsSchema = zod.object({
    slug: zod.string(),
  });

  const { slug } = slugProductRouteParamsSchema.parse(routeParams);

  const product = data.products.find((product) => {
    return product.slug === slug;
  });

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 });
  }

  return Response.json(product);
}
