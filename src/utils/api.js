import axios from 'axios';
import { getAccessToken } from './auth';

const server = axios.create({
  baseURL: 'https://ah-robotics-staging.herokuapp.com/api/v1',
  headers: getAccessToken() ? {
    Authorization: `token  ${getAccessToken()}`,
  } : {},
});

const api = {
  fetchUserArticles: (slug) => {
    const url = slug ? `${/articles/}${slug}/` : '/articles/';
    return server.get(url);
  },
};
export default api;
