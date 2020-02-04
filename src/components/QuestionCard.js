import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class QuestionCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        
        return (
            <div>
                <Card>
                    <Card.Body>{this.props.data}</Card.Body>
                </Card>
            </div>
        )
    }
}

export default QuestionCard
