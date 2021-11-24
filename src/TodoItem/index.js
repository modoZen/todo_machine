import { BiCheckCircle } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import './TodoItem.css'

function TodoItem(props) {
    const { todo, onComplete, onDelete } = props;
    const { text, completed } = todo; 
    
    return (
        <li className="TodoItem">
            {/* <span 
            className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            onClick={onComplete}
            >✓</span> */}
            <BiCheckCircle 
            onClick={onComplete}
            className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            />
            <p  className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            {/* <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            >X</span> */}
            <TiDelete
            className="Icon Icon-delete"
            onClick={onDelete}
            />
        </li>
    )
}

export { TodoItem }