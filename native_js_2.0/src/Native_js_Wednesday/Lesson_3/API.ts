import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '/?apikey=d3239a3a';
const axiosInstance = axios.create(configOMB);

// export const API = {
//     searchFilmsByTitle: (title: string) => {
//         return axiosInstance.get(`/?apikey=${key}&t=${title}`)
//             .then(res => res.data)
//             .catch(error => console.warn(error))
//     },
//     searchFilmsByType: (title: string, type: string) => {
//         return axiosInstance
//             .get(`/?apikey=${key}&t=${title}&type=${type}`)
//             .then((res) => res.data)
//             .catch((error) => console.warn(error));
//     },
// };

export const API = {
    searchFilmsByTitle: (title: string) => {
    const query = `${key}&s=${title}`;
    return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance
            .get(`/?apikey=${key}&t=${title}&type=${type}`)
            .then((res) => res.data)
            .catch((error) => console.warn(error));
    },
};