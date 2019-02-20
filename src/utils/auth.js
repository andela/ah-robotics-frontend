import axios from 'axios';

const AUTH_TOKEN = 'accessToken';

const setUserToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const setCurrentUser = (user) => {
  const activeUser = user || null;
  localStorage.setItem('user', activeUser);
};

export const getAccessToken = () => localStorage.getItem(AUTH_TOKEN);

export const isLoggedIn = () => {
  try {
    return !!getAccessToken();
  } catch (error) {
    return error === false;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem(AUTH_TOKEN);
  window.location.assign('/');
};

export const api = axios.create({
  baseURL: 'https://ah-robotics-staging.herokuapp.com/api/v1',
  headers: getAccessToken() ? {
    Authorization: `token  ${getAccessToken()}`,
  } : {},
  });

export default setUserToken;
