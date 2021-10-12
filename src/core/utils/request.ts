import axios, { Method } from 'axios';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
}

const BASE_URL = 'https://dummyapi.io/data/v1';
const APP_ID = '6165900c69b8375ef68792ca';

export const makeRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers: { 'app-id': APP_ID }
  });
}
