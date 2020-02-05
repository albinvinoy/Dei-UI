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
                                <Card.Body className="cardBody" style={{backgroundColor : this.props.answer === "_1"? "green" : "noColor"}}>{this.state._1}</Card.Body>
                            </div>
                        </Col>
                        <Col><div id="_2">
                            <Card.Body className="cardBody"  style={{backgroundColor : this.props.answer === "_2"? "green" : "noColor"}}>{this.state._2}</Card.Body>
                        </div></Col>
                    </Row>
                    <Row>
                        <Col><div id="_3" >
                            <Card.Body className="cardBody"  style={{backgroundColor : this.props.answer === "_3"? "green" : "noColor"}}>{this.state._3}</Card.Body>
                        </div></Col>
                        <Col><div id="_4" >
                            <Card.Body className="cardBody" style={{backgroundColor : this.props.answer === "_4"? "green" : "noColor"}}>{this.state._4}</Card.Body>
                        </div></Col>
                    </Row>
                </Card>
            </div>
            
        )
    }
}

export default AnswerCard
