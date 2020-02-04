import React, { Component } from 'react'
import '../styles/QuestionView.css'
import QuestionCard from './QuestionCard';
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export class QuestionView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            multiView: false,
            englishQuestion : "Some question in English that can be used.",
            malayalamQuestion : "Some question in Malayalam that can be used."

        }
    }

    render() {

        const viewController = () => {
            if (this.state.multiView) {
                return (
                    <div id="multiView">
                        <Container>
                            <Row>
                                <Col><QuestionCard 
                                data={this.state.englishQuestion}
                                /></Col>
                                <Col><QuestionCard
                                data={this.state.malayalamQuestion}
                                /></Col>
                            </Row>

                        </Container>
                    </div>
                )
            }
            else {
                return (
                    <div id="singleView">
                        <QuestionCard 
                        data={this.state.englishQuestion}
                        />
                    </div>

                )
            }
        }

        return (

            viewController()


        )
    }
}

export default QuestionView
