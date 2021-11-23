import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({ totalTodos, completedTodo, searhValue, setSearhValue, searchedTotos, completeTodo, deleteTodo, loading, error }) {
    return (
        <React.Fragment>
            {error && <p>Desespérate, hubo un error</p>}
            {loading && <p>Estamos cargando, no desesperes</p>}
            {(!loading && !searchedTotos.length) && <p>Crea tu primer TODO</p>}
            <TodoCounter 
            total={totalTodos}
            completed={completedTodo}
            />
            <TodoSearch 
            searhValue={searhValue}
            setSearhValue={setSearhValue}
            />
            <TodoList>
                {searchedTotos.map(todo=>(
                <TodoItem 
                key={todo.text} 
                todo={todo}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>

    );
}

export { AppUI }