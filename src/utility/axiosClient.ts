import axios from 'axios';

export const API_BASE_PATH = 'http://localhost:5000/';
export const API_BASE_RELATIVE_PATH = 'api/';

export const axiosInstance = axios.create({
    baseURL:API_BASE_PATH + API_BASE_RELATIVE_PATH
})

