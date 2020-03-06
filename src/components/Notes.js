import React, { Component } from 'react'
import "../styles/Notes.css"

class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div id="notesDiv">
                <p id="notes">Notes: {this.props.data}</p>
            </div>
        )
    }
}

export default Notes
