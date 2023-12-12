import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'd3239a3a';
const axiosInstance = axios.create(configOMB);

export  const API = {
    searchFilmsByTitle: (title: string) => {
        axios.get(configOMB.baseURL)
            .then(() => {})
        console.log(title)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


//get post put delete