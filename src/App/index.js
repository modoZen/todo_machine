import React from "react";
import { AppUI } from "./AppUi";
// import './App.css';

// const defaultTodos = [
//   { text: 'Estudiar programacion', completed: true},
//   { text: 'Viajar con Emily', completed: false},
//   { text: 'Acariciar al gatito', completed: false},
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [ item , setItem ]    = React.useState(initialValue);
  
  React.useEffect(()=>{
    setTimeout( ()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(error);
      }
    },1000);
  },[])

  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedItem);
    setItem(newItem);
  }

  return {
    item, 
    saveItem, 
    loading,
    error
  };
}

function App() {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);

  const [ searhValue, setSearhValue ] = React.useState('');

  const completedTodo = todos.filter(todo=>todo.completed).length;
  const totalTodos = todos.length;
  const searchedTotos = todos.filter(todo=>todo.text.toLowerCase().includes(searhValue.toLowerCase()));

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

  // console.log('render antes de useEffect');

  // React.useEffect(()=>{
  //   console.log('use effect');
  // },[])

  // console.log('render antes de useEffect');

  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodo={completedTodo}
    searhValue={searhValue}
    setSearhValue={setSearhValue}
    searchedTotos={searchedTotos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
