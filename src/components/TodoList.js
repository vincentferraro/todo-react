import { Component } from 'react'

import '../styles/todoList.css'

import AddTask from '../components/AddTask'
import Task from '../components/Task'

class TodoList extends Component{

    constructor(props) {
        super(props)
        this.state = {
            tasks:["task 1","task2"]
        }
    }


    render() {
            return (
            <div className="todo-list">
                <AddTask />
                <div className='task-list'>
                    <ul>
                        <Task task="tâche 1" />
                        <Task task="tâche2"/>
                        <Task />
                    </ul>
                </div>
            </div>
        )
        }
        
    
}
export default TodoList