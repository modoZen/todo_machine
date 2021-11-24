import React from "react";  
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onChange = (event) =>{
        console.log(event.target.value);
        setNewTodoValue(event.target.value);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Escribe el TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                onClick={onCancel}
                className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }