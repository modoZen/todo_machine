import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { TodoLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodosError />}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
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
                <TodoForm />
            </Modal>
            )}
            
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }