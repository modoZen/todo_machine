import React from 'react';
import './TodoSearch.css'

function TodoSearch({searhValue, setSearhValue, loading}) {

    const onSearchValueChange = (event) =>{setSearhValue(event.target.value);}
    return (
        <input 
        className="TodoSearch" 
        placeholder="gatito" 
        value={searhValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
    )
}

export { TodoSearch }