import { Component } from 'react'

class TaskList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='task-list'>
                <ul>
                    <li>Task 1</li>
                    <li> Task 2</li>
                </ul>
            </div>
        )
    }
}
export default TaskList