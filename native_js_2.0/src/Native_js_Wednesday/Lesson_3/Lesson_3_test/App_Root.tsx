import React from 'react';
import {addUserData, deleteUserData, getUserData, updateUserData} from "./api";

export const AppRoot = () => {

    // useEffect(() => {
    //     getPosts
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // })

    let getUserDataHandler = () => {
        return getUserData()
    }

    let addUserDataHandler = () => {
        return addUserData()
    }

    let updateUserDataHandler = () => {
        return updateUserData()
    }
    let deleteUserDataHandler = () => {
        return deleteUserData()
    }


    return (
        <div>
            <span><input /></span>
            <div>
                <button onClick={getUserDataHandler}>get user data</button>
            </div>
            <div>
                <button onClick={addUserDataHandler}>add user data</button>
            </div>
            <div>
                <button onClick={updateUserDataHandler}>update user data</button>
            </div>
            <div>
                <button onClick={deleteUserDataHandler}>delete user data</button>
            </div>
        </div>

    );
};