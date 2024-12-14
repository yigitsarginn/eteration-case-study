import { Product } from '@/features/home/service/products';

export const filterProducts = (
  products: Product[],
  searchQuery: string,
  brands: Product['brand'][],
  models: Product['model'][],
): Product[] => {
  const lowerCaseQuery = searchQuery.toLowerCase();

  return products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery),
    )
    .filter((product) =>
      brands.length ? brands.includes(product.brand) : true,
    )
    .filter((product) =>
      models.length ? models.includes(product.model) : true,
    );
};
