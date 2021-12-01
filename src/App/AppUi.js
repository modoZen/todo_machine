import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoHeader } from "../TodoHeader"
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { TodoLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal,
        completedTodo,
        totalTodos, 
        searhValue,
        setSearhValue,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter 
                completedTodo={completedTodo}
                totalTodos={totalTodos}
                />
                <TodoSearch 
                searhValue={searhValue}
                setSearhValue={setSearhValue}
                />
            </TodoHeader>
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