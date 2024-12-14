import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import Constants from 'expo-constants';

export const baseQuery = fetchBaseQuery({
  baseUrl: Constants?.expoConfig?.extra?.BASE_URL as string,
  headers: {},
});
