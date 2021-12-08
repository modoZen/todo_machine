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
import { ChangeAlert } from "../ChangeAlert";
// import './App.css';


function App() {
  const {
    state,
    stateUpdaters
  } = useTodos();

  const {
    loading,
    error,        
    totalTodos,      
    completedTodo,   
    searhValue,    
    searchedTodos, 
    openModal,
  } = state;

  const {
    setSearhValue,   
    addTodo,
    completeTodo, 
    deleteTodo, 
    setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;
  
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
        <ChangeAlert
        sincronizeTodos={sincronizeTodos}
        />
    </React.Fragment>
  );
}

export default App;
