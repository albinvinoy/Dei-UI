import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/AnswerCard.css'

class AnswerCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _1: "First Answer",
            _2: "Second Answer",
            _3: "Third Answer",
            _4: "Fourth Answer"

        }
    }

    

    render() {
        
        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div id="_1">
                                <Card.Body className="cardBody" style={{backgroundColor: "green" }}>{this.props.one}</Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            
        )
    }
}

export default AnswerCard
