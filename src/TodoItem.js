import './TodoItem.css'

function TodoItem(props) {
    const { todo } = props;
    const { text, completed } = todo; 
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>✓</span>
            <p  className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    )
}

export { TodoItem }