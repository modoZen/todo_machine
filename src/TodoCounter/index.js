import React from 'react'
import './TodoCounter.css'

function TodoCounter({completedTodo, totalTodos, loading}) {
    return (
        <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}
        >
            Has completado {completedTodo} de {totalTodos} TODOs
        </h2>
    )
}

export { TodoCounter }