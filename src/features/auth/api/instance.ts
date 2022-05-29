import axios, { Method } from 'axios';

// todo add API_URL
const BASE_URL = '/mock';

const instance = axios.create({ baseURL: BASE_URL });

export interface RequestConfig {
  endpoint: string;
  method: Method;
  body?: { [key: string]: string };
}

export function createFormData(obj: { [key: string]: string } = {}) {
  return Object.keys(obj).reduce((form, key) => {
    const value = obj[key];
    if (value !== null && value !== undefined && value !== '') form.append(key, value);
    return form;
  }, new FormData());
}

export const createRequest = async <T>({ endpoint, method, body }: RequestConfig): Promise<T> => {
  const { data } = await instance({ url: endpoint, method: method, data: createFormData(body) });

  if (data.code !== 200) throw data;
  return data;
};

export default instance;
