import './TodoItem.css'

function TodoItem(props) {
    const { todo, onComplete, onDelete } = props;
    const { text, completed } = todo; 
    
    return (
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            onClick={onComplete}
            >✓</span>
            <p  className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            >X</span>
        </li>
    )
}

export { TodoItem }