
import { Component } from 'react'
import '../styles/AddTask.css'

class AddTask extends Component {

    render() {
        return (
            <div className="add-task">
                <label>
                    <span>Task:</span>
                    <input className="text-input" type="text" 
                        onChange={this.props.handleChange} />
                </label>
                <button onClick={this.props.handleClick}> Valider</button>
            </div>
        )
    }
}

export default AddTask