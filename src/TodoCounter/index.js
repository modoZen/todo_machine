import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
    const { 
        completedTodo,
        totalTodos 
    } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completedTodo} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter }