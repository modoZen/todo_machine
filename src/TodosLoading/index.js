import './TodosLoading.css'
function TodoLoading() {

    return (
        new Array(4).fill().map((el,i)=>(
        <div key={i} className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando TODOs...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
        ))
        
    )
}

export { TodoLoading }