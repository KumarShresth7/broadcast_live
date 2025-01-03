import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getCurrentUser = () => {
  return localStorage.getItem('token');
};


export const logout = () => {
  localStorage.removeItem('token');
  setAuthToken(null);
};