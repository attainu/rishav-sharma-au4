import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [title,setTittle] = useState([])
    const data =[];
    useEffect(() => {
        axios.get('https://swapi.co/api/planets/2/').then(res => {
            res.data.residents.map(url =>
                axios.get(url)
                .then(res => res.data.films.map(url => axios.get(url)
                .then(res => data.push(res.data.title))))
                )
        })
    },[])
    const load = () => setTittle([...data])
    return(
        <div>
            <h1>Exercise2</h1>
            <button onClick={load}>Loading</button>
            <ul>
                {
                    title.length > 0 ? title.map((name,idx) => <li key={idx}>{name}</li>):null
                }
            </ul>
        </div>
    )
}
