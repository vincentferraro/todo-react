import { Component } from 'react'

class AddTask extends Component {

    render() {
        return (
            <div class="AddTask">
                <label>
                    Task:
                    <input type="text"/>
                </label>
                <button value="Ajouter"/>
            </div>
        )
    }
}