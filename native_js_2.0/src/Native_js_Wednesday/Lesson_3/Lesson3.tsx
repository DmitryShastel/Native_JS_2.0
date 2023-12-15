import React, {useState} from 'react';
import {API} from './API';

export const Lesson3 = () => {

    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');


    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(res => {
                console.log(res)
                if (res.data.Response === 'True') {
                    setSerachResult(JSON.stringify(res.data.Search))
                } else {
                    console.log(res.data)
                    setSerachResult(res.data.Error)
                }
            })
    };


    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(res => {
                console.log(res)
                if (res.data.Response === 'True') {
                    setSerachResultByType(JSON.stringify(res.data.Search))
                } else {
                    setSerachResultByType(res.data.Error)
                }
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}