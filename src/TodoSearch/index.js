import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
    const {
        searhValue,     
        setSearhValue, 
    } = React.useContext(TodoContext);

    const onSearchValueChange = (event) =>{setSearhValue(event.target.value);}

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