import axiosClient from './axiosClient';

const categoryApi = {
  getAll(page = '', search = '') {
    const url = `/category?page=${page || ''}&search=${search || ''}`;
    return axiosClient.get(url);
  },

  getPopular() {
    const url = '/category/popular';
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
