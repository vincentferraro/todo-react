
import '../styles/Task.css'

function Task(props) {


    return (
        <li className="task">
            <span>{props.task}</span>
         
        </li>
    )
}

export default Task