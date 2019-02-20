import axios from 'axios';

const setUserToken = (token) => {
  if (token) {
    localStorage.setItem('accessToken', token);
  }
};
export const setCurrentUser = (user) => {
  const activeUser = user || null;
  localStorage.setItem('user', activeUser);
};

const token = localStorage.getItem('accessToken') || null;

export const api = axios.create({
  baseURL: 'http://ah-robotics-staging.herokuapp.com/api/v1',
  headers: {
    Authorization: `token  ${token}`,
  },
  });
export default setUserToken;
