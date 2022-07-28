import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';

interface IUser {
  name: string;
  [key: string]: string;
}

export const userService = createApi({
  reducerPath: 'userService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
    }),
    getUser: build.query<IUser, string | undefined | string[]>({
      // пришлось дописать undefined | string[], так как id берется из router, и он может вернуть такие типы
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});
