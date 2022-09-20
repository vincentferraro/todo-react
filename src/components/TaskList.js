import { Component } from 'react'
import Task from '../components/Task'
import '../styles/TaskList.css'

class TaskList extends Component {
    
    render() {
        return (
            <div className='task-list'>
                <ul>
                    <Task />
                    <Task />
                    <Task />
                </ul>
            </div>
        )
    }
}
export default TaskList