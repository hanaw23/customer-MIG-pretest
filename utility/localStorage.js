import axios from "axios";

export const setUserLocal = (token) => localStorage.setItem("User_token", token);

export const getToken = () => {
  return localStorage.getItem("User_token");
};

export const removeToken = () => {
  localStorage.removeItem("User_token");
};

export const hasToken = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = getToken();
      return config;
    },
    (error) => Promise.reject(error)
  );
};
