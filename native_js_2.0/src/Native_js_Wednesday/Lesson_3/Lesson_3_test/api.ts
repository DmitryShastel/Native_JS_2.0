import axios from 'axios';

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';

export const getUserAllData = async () => {
    try {
        const userData = await axios.get(`${FIRST_API_URL}/users`);
        console.log(userData.data);
        console.log(userData.status);
    } catch (error) {
        console.log(error)
    }
}

export const addUserData = async () => {
    const dataUser = await axios.post(`${FIRST_API_URL}/users`, {
        name: "test name",
        username: "test username",
        email: "test@april.biz",
    })
    console.log(dataUser.data);
    console.log(dataUser.status);
}

export const updateUserData = async () => {
    const updateDataPost = await axios.put(`${FIRST_API_URL}/users/1`,
        {name: "test name88"})
    console.log(updateDataPost.data);
    console.log(updateDataPost.status);
}

export const deleteUserData = async () => {
    const updateDataPost = await axios.delete(`${FIRST_API_URL}/users/1`)
    console.log(updateDataPost.data);
    console.log(updateDataPost.status);
}

export const getUserDataById = async (id: string) => {
    try {
        const userData = await axios.get(`${FIRST_API_URL}/users/${id}`);
        console.log(userData.data);
    }catch (error) {
        console.log(error)
    }
}
