import React, { Component } from 'react'
const storeName = "currentRound";

export class View extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentWillMount(){
        console.log("View Component Mounted")
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default View
