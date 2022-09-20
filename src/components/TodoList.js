import React, { Component } from 'react'

import '../styles/todoList.css'
import AddTask from '../components/AddTask'
import Task from '../components/Task'



class TodoList extends Component{

    constructor(props) {
        super(props)
        this.state={
            text: '',
            arr: ['text1','text2']
        }

        
        
        this.handleChange = this.handleChange.bind(this)
        this.handleClick= this.handleClick.bind(this)
    }

    
    handleChange(event) {
        this.setState({
            text:event.target.value
        })

    }
    
    handleClick(event) {
        this.setState({arr:[...this.state.arr, this.state.text]})
    }
    
    


    render() {
            return (
            <div className="todo-list">
                    <AddTask handleChange={this.handleChange} handleClick={this.handleClick} />
                <div className='task-list'>
                    <ul id="list-task">
                            {this.state.arr.map(t => <Task task={t}/>)}
                    </ul>
                </div>
            </div>
        )
        }
        
    
}
export default TodoList