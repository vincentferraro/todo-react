import { Component } from 'react'
import '../styles/AddTask.css'

class AddTask extends Component {

    render() {
        return (
            <div className="add-task">
                <label>
                    Task:
                    <input type="text"/>
                </label>
                <button > Valider</button>
            </div>
        )
    }
}

export default AddTask