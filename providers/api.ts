import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './fetch';

export const mvpApi = createApi({
  reducerPath: 'mvpApi',
  baseQuery,
  endpoints: () => ({}),
});
