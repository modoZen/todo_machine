import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desespérate, hubo un error</p>}
                {loading && <p>Estamos cargando, no desesperes</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
                {searchedTodos.map(todo=>(
                <TodoItem 
                    key={todo.text} 
                    todo={todo}
                    onComplete={()=>completeTodo(todo.text)}
                    onDelete={()=>deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
            <Modal>
                <p>{ searchedTodos[1].text }</p>
            </Modal>
            )}
            
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }