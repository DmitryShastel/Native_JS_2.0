import React from 'react';
import {addPostData, getUserData} from "./api";

export const AppRoot = () => {

    // useEffect(() => {
    //     getPosts
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // })

    let getUserDataHandler = () => {
        return getUserData()
    }

    let addPostDataHandler = () => {
        return addPostData()
    }


    return (
        <div>
            <div>
                <button onClick={getUserDataHandler}>get user data</button>
            </div>
            <div>
                <button onClick={addPostDataHandler}>add post data</button>
            </div>
        </div>

    );
};