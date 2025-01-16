import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';

export const passkeyApi = createApi({
  reducerPath: 'passkeyApi',
  baseQuery,
  tagTypes: ['Passkeys'],
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});
export const {useLoginMutation} = passkeyApi;
