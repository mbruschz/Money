
import axios from 'axios'

let token: string;

export const setToken = (newToken: string) => {
  token = newToken;
};

const api = axios.create({
  baseURL: import.meta.env.URL_API,
})

const getToken = (): string => {
  return token
};

axios.interceptors.request.use(function (config) {
  if (config.headers)
    config.headers.authorization = `Bearer ${getToken()}`;
  return config;
});

export default api