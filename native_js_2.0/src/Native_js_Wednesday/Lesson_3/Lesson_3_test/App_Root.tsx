import React, {useState} from 'react';
import {addUserData, deleteUserData, getUserAllData, getUserDataById, updateUserData} from "./api";

export const AppRoot = () => {

    const [id, setId] = useState('')

    let getUserDataHandler = () => {
        return getUserAllData()
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

   let getUserDataByIdHandler = () => {
        if(id) {
            return getUserDataById(id)
        } else {
            console.warn('Please enter an ID')
        }
   }

    let searchUser = () => {
        getUserDataByIdHandler()
    }

    return (
        <div>
            <span>
                <input
                    type='number'
                    onChange={(e) => setId(e.currentTarget.value)}/>
            </span>
            <div>
                <button onClick={searchUser}>get user data</button>
            </div>
            <div>
                <button onClick={getUserDataHandler}>get all users data</button>
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