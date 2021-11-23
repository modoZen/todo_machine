import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searhValue, setSearhValue }) {
    const onSearchValueChange = (event) =>{
        console.info(event.target.value);
        setSearhValue(event.target.value);
    }

    return (
        <input 
        className="TodoSearch" 
        placeholder="gatito" 
        value={searhValue}
        onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch }