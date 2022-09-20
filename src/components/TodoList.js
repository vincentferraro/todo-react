import { Component } from 'react'

import '../styles/todoList.css'
import AddTask from '../components/AddTask'
import Task from '../components/Task'

class TodoList extends Component{

    constructor(props) {
        super(props)
        this.state={
            text:''
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(value) {
        this.setState({
            text:value
        })
        console.log('AddTask clicked')
        console.log(this.state.text)
    }
    



    render() {
            return (
            <div className="todo-list">
                    <AddTask handleClick={this.handleClick} />
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