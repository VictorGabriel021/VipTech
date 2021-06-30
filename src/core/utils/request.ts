import axios, { Method } from 'axios';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
}

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60dbd0158f795088e70e2344';

export const makeRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers: { 'app-id': APP_ID }
  });
}
