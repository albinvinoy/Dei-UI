import React, { Component } from 'react'
import QuestionCard from '../QuestionCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Timer from '../Timer';
import '../../styles/RegularRoundMaster.css'
import AnswerCard from '../AnswerCard';
import {useEffect, useState} from 'react'

let TimerComponent = ({seconds}) => (
     new Timer(seconds)
)

class RegularRoundMaster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: 30,
            localStore :  1
        }
        
        this.nextTimer = this.nextTimer.bind(this);
        this.displayAnswer = this.displayAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextTimer() {
        clearInterval(TimerComponent)
        this.setState({
            timer : 10,
            answer : this.props.answer,
            answerBulk : {}
        })
    }

    displayAnswer() {
        localStorage.setItem("answer", 1)
       
            fetch("http://localhost:5000/api/regularRound/2")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
            })
        }

    nextQuestion(){

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
                    <br />
                    <Row>
                        <button className="rounded-pill btn-warning" onClick={this.nextTimer}>Skip</button>
                        <button className="rounded-pill btn-danger" onClick={this.displayAnswer}>View Answer</button>
                        <button className="rounded-pill btn-success" onClick={this.nextQuestion}>Next Question</button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RegularRoundMaster
