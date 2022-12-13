import axios from 'axios';
import {getAccessToken} from './../utils/get-token';

const axiosClient = axios.create({
  // baseURL: 'https://restaurant-uit-server.herokuapp.com',
  baseURL: 'http://10.0.124.252:8080',
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    const token = await getAccessToken();
    console.log(token);
    if (token) {
      config.headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.log(error);

    const err = new Error(error.response.data.message);

    return Promise.reject(err);
  },
);

export default axiosClient;
