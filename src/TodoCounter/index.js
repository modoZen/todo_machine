import React from 'react'
import './TodoCounter.css'

function TodoCounter({completedTodo, totalTodos}) {
    return (
        <h2 className="TodoCounter">Has completado {completedTodo} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter }