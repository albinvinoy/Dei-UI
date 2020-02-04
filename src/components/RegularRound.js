import React, { Component } from 'react'
import QuestionView from './QuestionView'
import Answer from './Answer'
import { Box, Grid } from '@material-ui/core'

// This round will contain a question and 4 multiple answer choices
class RegularRound extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div class="round1Tab" >
              
               <QuestionView />
               <Answer />
              
            </div>
        )
    }
}

export default RegularRound
