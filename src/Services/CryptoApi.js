import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'af7aed117bmshc16ca4b3ef02621p133ea7jsn9080089734e1'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi= createApi({
reducerPath:'createApi',
baseQuery : fetchBaseQuery({ baseUrl}),
endpoints:(builder)=>({
    getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
    }),
    getExchanges:builder.query({
      query: () => createRequest( `/exchanges`)
  }),
    getCryptoDetails:builder.query({
      query: (coinId) => createRequest( `/coin/`)
  }),
  getCryptoHistory: builder.query({
    query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
  }),

})
});
export const{
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery ,  useGetCryptoHistoryQuery,
} = cryptoApi;