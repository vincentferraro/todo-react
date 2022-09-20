
import { Component } from 'react'
import '../styles/AddTask.css'

class AddTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text:''
        }

        this.handleChange = this.handleChange.bind(this)
        

    }

    handleChange(event) {
        this.setState({
                text: event.target.value
        })

        
        
    }
    /*handleClick(){
        console.log(`Button clicked, Task ${this.state.text}`)
    }*/

    render() {
        return (
            <div className="add-task">
                <label>
                    <span>Task:</span>
                    <input className="text-input" type="text" onChange={this.handleChange} />
                </label>
                <button onClick={()=>{this.props.handleClick(this.state.text)}}> Valider</button>
            </div>
        )
    }
}

export default AddTask