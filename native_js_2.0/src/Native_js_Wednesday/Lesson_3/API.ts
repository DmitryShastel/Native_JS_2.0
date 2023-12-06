import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'd3239a3a';
const axiosInstance = axios.create(configOMB);

export  const API = {
    searchFilmsByTitle: (title: string) => {
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};