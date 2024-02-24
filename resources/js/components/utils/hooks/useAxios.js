import axios from 'axios';
import { API_BASE_URL } from '../../config/constants';

const useAxios = () => {

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL, // Your base URL here
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` //  setting Authorization header
    },
    timeout: 10000,
  });

  return axiosInstance;
};

export default useAxios;
