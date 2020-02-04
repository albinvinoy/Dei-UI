import React, { Component } from 'react'
import QuestionCard from '../QuestionCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Timer from '../Timer';


import '../../styles/RegularRoundMaster.css'
import AnswerCard from '../AnswerCard';

// let TimerComponent = ({seconds}) => (
// <Timer roundTime={seconds} />
// ) 

let TimerComponent = ({seconds}) => (
     new Timer(seconds)
)

class RegularRoundMaster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: 30
        }
        this.nextTimer = this.nextTimer.bind(this);
        this.newQuestion = this.newQuestion.bind(this);
    }

    nextTimer() {
        TimerComponent.stopTimer();
        this.setState({
            timer : 10,
            answer : this.props.answer
        })
    }

    newQuestion() {

    }

    render() {
        const viewController = () => {
            if (this.props.multiView) {
                return (
                    <div id="multiView">
                        <Container>
                            <Row>
                                <Col><QuestionCard
                                    data={this.props.englishQuestion}
                                />
                                 <br />
                                <AnswerCard answer={this.props.answer}/>
                                </Col>
                                <Col><QuestionCard
                                    data={this.props.malayalamQuestion}
                                />
                                <br />
                                <AnswerCard answer={this.props.answer}/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            }
            else {
                return (
                    <div id="singleView">
                        <QuestionCard
                            data={this.props.englishQuestion}
                        />
                        <br />
                        <AnswerCard answer={this.props.answer}/>
                    </div>
                )
            }
        }
        return (
            <div>
                <Timer seconds={this.state.timer} />
                {viewController()}
                <Container>
                    <Row>
                        <button class="rounded-pill btn-warning" onClick={this.nextTimer}>Skip</button>
                        <button class="rounded-pill btn-success" onClick={this.newQuestion}>View Answer</button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RegularRoundMaster
