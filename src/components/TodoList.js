
import '../styles/todoList.css'

import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

function TodoList(){


        return (
            <div className="todo-list">
                <AddTask />
                <TaskList />
            </div>
        )
    
}
export default TodoList