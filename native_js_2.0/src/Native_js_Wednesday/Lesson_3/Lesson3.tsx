import React, {useEffect, useState} from 'react';
import {API} from './API';

export const Lesson3 = () => {

    type MoveDataType = {
        Poster: string
        Title: string
        Type: string
        Year: string
        imdbID: string
    }

    type TypeOfMoveType = {

    }

    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<MoveDataType[]>([]);
    const [searchNameByType, setSearchNameByType] = useState<any>();
    const [searchResultByType, setSearchResultByType] = useState<MoveDataType[]>([]);
    const [json, setJson] = useState<MoveDataType[]>()


    //Поиск фильма через кнопку
    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(res => {
                console.log(res)
                if (res.data.Response === 'True') {
                    // setSearchResult(JSON.stringify(res.data.Search))
                    setSearchResult(res.data.Search)
                } else {
                    // console.log(res.data)
                    setSearchResult(res.data.Error)
                }
            })
    };

    //Поиск фильма через ввод названия фильма
    // useEffect(() => {
    //     const delaySearch = setTimeout(() => {
    //         API.searchFilmsByTitle(searchName)
    //             .then((res) => {
    //                 console.log(res);
    //                 if (res.data.Response === 'True') {
    //                     // setSearchResult(res.data.Search);
    //                 } else if (res.data.Error !== "Incorrect IMDb ID.") {
    //                     // console.log(res.data.Error);
    //                     setSearchResult(res.data.Error);
    //                 }
    //             });
    //     }, 500); // Задержка в 500 миллисекунд для ожидания ввода
    //     return () => clearTimeout(delaySearch); // Очистка таймера при каждом изменении значения в поле ввода
    // }, [searchName]);

    //Поиск типа фильма или сериала через кнопку
    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(res => {
                console.log(res)
                if (res.data.Response === 'True') {
                    // setSearchResultByType(JSON.stringify(res.data.Search))
                    setSearchResultByType(res.data.Search)
                } else {
                    setSearchResultByType(res.data.Error)
                }
            })
    }

    //Поиск фильма по типу через ввод названия фильма
    // useEffect(() => {
    //     const delaySearchType = setTimeout(() => {
    //         API.searchFilmsByType(searchNameByType, '')
    //             .then((res) => {
    //                 // console.log(res);
    //                 if (res.data.Response === 'True') {
    //                     // setSearchResultByType(res.data.Search);
    //                 } else if (res.data.Error !== "Incorrect IMDb ID.") {
    //                     setSearchResultByType(res.data.Error);
    //                 }
    //             });
    //
    //     }, 500);
    //
    //     return () => clearTimeout(delaySearchType);
    // }, [searchNameByType]);

    const handleSearchInputChange = (event: any) => {
        const {value} = event.target;
        setSearchName(value);
    }
    const handleSearchTypeInputChange = (event: any) => {
        const {value} = event.target;
        setSearchNameByType(value);
    };

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                {/*<input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>*/}
                <input type="text" value={searchName} onChange={handleSearchInputChange}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {/*{searchResult && searchResult.map((item: MoveDataType) => (*/}
                    {/*    <div key={item.imdbID}>{item.Title}</div>*/}
                    {/*))}*/}
                    {searchResult.map((item: MoveDataType) => (
                        <div key={item.imdbID}>{item.Title}: {item.Year}</div>
                    ))}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                {/*<input type="text" value={searchNameByType}*/}
                {/*       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>*/}
                <input type="text" value={searchNameByType}
                       onChange={handleSearchTypeInputChange}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType.map((item: MoveDataType) => (
                        <div key={item.imdbID}>{item.Title}: {item.Type}</div>
                    ))}

                    {/*{searchResultByType}*/}
                </div>
            </div>
        </div>
    );
}



