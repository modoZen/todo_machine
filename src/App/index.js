import React from "react";
import { useTodos } from "./useTodos";
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
// import './App.css';


function App() {
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
    setOpenModal,
    addTodo,
  } = useTodos();
  
  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
            completedTodo={completedTodo}
            totalTodos={totalTodos}
            // loading={loading}
            />
            <TodoSearch 
            searhValue={searhValue}
            setSearhValue={setSearhValue}
            // loading={loading}
            />
        </TodoHeader>

        <TodoList 
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searhValue}
          onError={()=><TodosError />}
          onLoading={()=><TodoLoading />}
          onEmpty={()=><EmptyTodos />}
          onEmptySearchResults={
            (searchText) => (<p>No hay resultado para {searchText} </p>
          )}
          // render={todo=>(
          //   <TodoItem 
          //     key={todo.text} 
          //     todo={todo}
          //     onComplete={()=>completeTodo(todo.text)}
          //     onDelete={()=>deleteTodo(todo.text)}
          //   />
          // )}
        >
          {todo=>(
            <TodoItem 
              key={todo.text} 
              todo={todo}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          )}

        </TodoList>
        

        {/* <TodoList>
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
        </TodoList> */}
        {openModal && (
        <Modal>
            <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
        </Modal>
        )}
        
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );
}

export default App;
