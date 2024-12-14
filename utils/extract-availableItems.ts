import { Product } from '@/features/home/service/products';

export const extractAvailableBrands = (
  products: Product[],
): Product['brand'][] => {
  return [...new Set(products.map((product) => product.brand))];
};

export const extractAvailableModels = (
  products: Product[],
): Product['model'][] => {
  return [...new Set(products.map((product) => product.model))];
};
