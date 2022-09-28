
import '../styles/Task.css'

function Task(props) {


    return (
        <li className="task">
            <span>{props.task}</span>
            <input type="checkbox" />
            
        </li>
    )
}

export default Task