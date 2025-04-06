'use client';

import { useCart } from '@/contexts/cart-context';

interface IAddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: IAddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="h-12 mt-8 flex items-center justify-center rounded-full bg-emerald-600 font-semibold text-white cursor-pointer"
    >
      Adicionar ao carrinho
    </button>
  );
}
