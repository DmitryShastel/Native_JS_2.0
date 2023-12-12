import React from 'react';
import {getPosts} from "./api";

export const AppRoot = () => {

    // useEffect(() => {
    //     getPosts
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // })

    let getPostDataHandler = () => {
        return getPosts()
    }


    return (
        <div>
            <button onClick={getPostDataHandler}>get posts data
            </button>
        </div>
    );
};