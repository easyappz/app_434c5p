import { instance } from './axios';

export const getFeaturedAds = async () => {
  const response = await instance.get('/api/ads');
  return response.data;
};