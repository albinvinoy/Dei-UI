import React, { Component } from 'react'

class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div id="notesDiv">
                <p id="notes">{this.props.data}</p>
            </div>
        )
    }
}

export default Notes
