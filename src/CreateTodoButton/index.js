import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal,canChange}) {
    const onClickButton = () =>{
        setOpenModal(prevState=>!prevState);
    }

    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        disabled={!canChange}
        >+</button>
    )
}

export { CreateTodoButton }