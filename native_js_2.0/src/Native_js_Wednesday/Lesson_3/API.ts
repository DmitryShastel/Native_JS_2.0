import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '/?apikey=d3239a3a';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title: string) => {
    const query = `${key}&s=${title}`;
    return axiosInstance.get(query);
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `${key}&s=${title}&type=${type}`;
        return axiosInstance.get(query);
    },
};