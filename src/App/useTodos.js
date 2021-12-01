import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
    
      const [ searhValue, setSearhValue ] = React.useState('');
      const [ openModal, setOpenModal ] = React.useState(false);
    
      const completedTodo = todos.filter(todo=>todo.completed).length;
      const totalTodos = todos.length;
      const searchedTodos = todos.filter(todo=>todo.text.toLowerCase().includes(searhValue.toLowerCase()));
    
      const addTodo = (text)=>{
        console.log(text);
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text
        })
        saveTodos(newTodos);
        setOpenModal(false);
      }
      const completeTodo = (text)=>{
        const todoIndex = todos.findIndex(todo=>todo.text===text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo=>todo.text===text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

    return {
      loading,
      error,        
      totalTodos,      
      completedTodo,   
      searhValue,     
      setSearhValue,   
      searchedTodos, 
      addTodo,
      completeTodo, 
      deleteTodo, 
      openModal,
      setOpenModal
    }
}

export { useTodos }