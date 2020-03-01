import React, { Component } from 'react'
import QuestionCard from '../QuestionCard'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


let multiViewComponent = (prompt, viewState) => {
    return (
        <div id="multiView">
            <Container>
                <Row>
                    <Col><QuestionCard

                    />
                        <br />

                    </Col>
                    <Col>
                        <QuestionCard

                        />
                        <br />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

let singleViewComponent = (promot, viewState) => {
    return (

        <div id="singleView">
            <br />
            <QuestionCard data={"prompt : " + promot} />
            <br />
            <QuestionCard data={'englishQuestion'} />
        </div>
    )
}

class RegularView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentQuestion: "",
            prompt: "",
            currentAnswer: "",
            currentImage: "",
            displayAnswer: false,
            multiView: false,
            currentQuestionMalayalam: "",
            currentAnswerMalayalam: "",
        }
    }

    componentWillMount() {
        window.addEventListener('storage', (StorageEvent) => {

        })
    }

    render() {

        const { currentQuestion, currentAnswer, currentImage, displayAnswer, displayImage,
            currentQuestionMalayalam, currentAnswerMalayalam } = this.state;

        return (
            <div>
                {singleViewComponent()}

            </div>
        )
    }
}

export default RegularView
