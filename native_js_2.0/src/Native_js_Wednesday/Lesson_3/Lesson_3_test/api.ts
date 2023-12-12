import axios from 'axios';


const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';
const SECOND_API_URL = 'https://fakeapi.com'

// export const getData = async () => {
//     try {
//         axios({
//             url: `${FIRST_API_URL}/users/`,
//             method: 'get'
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getUserData = async () => {
    try {
        const userData = await axios.get(`${FIRST_API_URL}/users`);
        console.log(userData.data);
    } catch (error) {
        console.log(error)
    }
}

export const addPostData = async () => {
    const dataPost = await axios.post(`${FIRST_API_URL}/posts`, {title: 'test', body: 'test'})
    console.log(dataPost.data);
    console.log(dataPost.status);
}