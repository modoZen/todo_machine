import './CreateTodoButton.css'

function CreateTodoButton() {
    const onClickButton = (msg) =>{
        alert(msg);
    }

    return (
        <button 
        className="CreateTodoButton"
        onClick={()=>onClickButton("Aqui va un modal")}
        >+</button>
    )
}

export { CreateTodoButton }