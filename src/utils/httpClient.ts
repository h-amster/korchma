import axios from 'axios';

const BASE_URL = 'https://korchma-api.onrender.com/api/app';

export const httpClient = {
  getVolumes: () => axios.get(`${BASE_URL}/volume/`).then(res => res.data),
  getCategories: () =>
    axios.get(`${BASE_URL}/drink-type/`).then(res => res.data),
  getProducers: () => axios.get(`${BASE_URL}/producer/`).then(res => res.data),
  getRegions: () => axios.get(`${BASE_URL}/region/`).then(res => res.data),
  getDrinks: () => axios.get(`${BASE_URL}/drink/`).then(res => res.data),
};
