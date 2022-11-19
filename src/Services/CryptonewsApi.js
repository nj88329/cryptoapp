import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'c65f241aa3msh238a40b5ea84c38p19d3dfjsnd5e2176de9c4'
    //   af7aed117bmshc16ca4b3ef02621p133ea7jsn9080089734e1
  }
const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi= createApi({
  reducerPath:'createNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
                query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
       })
      })
    });

     export const { useGetCryptoNewsQuery } = cryptoNewsApi;