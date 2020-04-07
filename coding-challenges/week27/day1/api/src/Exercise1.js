import React, { useState,useEffect } from 'react';

import {fetchAll} from './utils';

export default function() {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try{
        const data = await fetchAll([2,6,9])
        setTitle([...data]);
            } catch (err) {
                console.log(err)
            }
    }
    fetchData();
},[]);

return (
    <div>
        <h1>Exercise 1</h1>
        <ul>
            {title.length > 0 ? (
                title.map((name,idx) => <li key={idx}>{name}</li>)
            ) : (
                <li>loading...</li>
            )}
        </ul>
    </div>
)

}