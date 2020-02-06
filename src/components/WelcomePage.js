import React, { Component } from 'react'
import RoundSelector from './RoundSelector'

let roundSelector = () =>{

    return(
        <RoundSelector />
    )
}

 class WelcomePage extends Component {
    render() {
        return (
            
            <div>
                {roundSelector()}
                <h1>Welcome to Dei Verbum</h1>
            </div>
        )
    }
}

export default WelcomePage
