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


const configJSON = {
    baseURL: 'https://jsonplaceholder.typicode.com',
}

const axiosIn = axios.create(configJSON)
console.log(axiosIn.get(`/posts/2`))
console.log(axiosIn.post(`/posts`, {
    title: 'test',
    body: 'test',
    userId: 1,
}))
console.log(axiosIn.put(`/posts/2`, {
    title: 'test2',
    body: 'test2',
    userId: 1,
}))





// const baseURL = 'https://jsonplaceholder.typicode.com'
// console.log(axios.get(`${baseURL}/posts/1`))