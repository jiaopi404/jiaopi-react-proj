import axios from 'axios'

const globalBaseURL = 'http://localhost:5000';

export const useHttp = (baseURL?: string) => {
  if (!baseURL) {
    baseURL = globalBaseURL;
  }

  return {
    get: (path: string, data?: any) => {
      console.log('path and data: ', path, data);
      return axios.get(baseURL + path, data);
    },
    post: (path: string, data?: any) => {
      return axios.post(baseURL + path, data);
    }
  }
}