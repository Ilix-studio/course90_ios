import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const API_CONFIG = {
  BASE_URL: 'https://content-specific-system.onrender.com/api/student',
};

export const baseQuery = fetchBaseQuery({
  baseUrl: API_CONFIG.BASE_URL,
});
