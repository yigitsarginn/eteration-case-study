import { Product } from '@/features/home/service/products';
import { SortOptions } from '@/features/home/components/FilterModal/FilterModal';

export const sortProducts = (
  products: Product[],
  sortBy: SortOptions | '',
): Product[] => {
  if (!sortBy) return products;

  return [...products].sort((a, b) => {
    switch (sortBy) {
      case SortOptions.OldToNew:
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case SortOptions.NewToOld:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case SortOptions.PriceHighToLow:
        return parseFloat(b.price) - parseFloat(a.price);
      case SortOptions.PriceLowToHigh:
        return parseFloat(a.price) - parseFloat(b.price);
      default:
        return 0;
    }
  });
};
