import axios from 'axios';
import baseURL from './baseUrl';

export const getAll = async (request = 'beers?page=1&per_page=80') => axios.get(`${baseURL}${request}`);

export const getByPage = (page = '1') => {
  axios.get(`${baseURL}beers?page=${page}&per_page=80`);
};
