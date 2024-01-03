// api.ts
import axios from 'axios';

export const getUrlAxios = async (url: string) => {
  const response = await axios.get(url);
  return response;
};
