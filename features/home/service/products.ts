import { mvpApi } from '@/providers/api';

export type Product = {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
};

type ProductQueryParams = {
  page: number;
  limit: number;
};

export const listService = mvpApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<Product[], ProductQueryParams>({
      query: ({ page, limit }) => ({
        url: `https://5fc9346b2af77700165ae514.mockapi.io/products`,
        params: { page, limit },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.page !== previousArg?.page,
    }),
    fetchAllProducts: build.query<Product[], void>({
      query: () => ({
        url: `https://5fc9346b2af77700165ae514.mockapi.io/products`,
      }),
    }),
    fetchProductsByIds: build.query<Product[], string[]>({
      query: (ids) => ({
        url: `https://5fc9346b2af77700165ae514.mockapi.io/products`,
        params: { id: ids.join(',') },
      }),
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchAllProductsQuery,
  useFetchProductsByIdsQuery,
} = listService;
