import axios from 'axios';


const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';
const SECOND_API_URL = 'https://fakeapi.com'

export const getPosts = async () => {
    try {
        axios({
            url: `${FIRST_API_URL}/users/`,
            method: 'get'
        })
    } catch (error) {
        console.log(error)
    }
}