import React, { Component } from 'react'
import QuestionCard from '../QuestionCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Timer from '../Timer';
import '../../styles/RegularRoundMaster.css'
import AnswerCard from '../AnswerCard';
import { useEffect, useState } from 'react'

let TimerComponent = ({ seconds }) => (
    new Timer(seconds)
)

class RegularRoundMaster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answerBulk: [''],
            currentQuestionData: {},
            currentQuestion: 0
        }

        this.skip = this.skip.bind(this);
        this.displayAnswer = this.displayAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    skip() {
        // clearInterval(TimerComponent)
        // this.setState({
        //     timer: 10,

        // })
    }

    displayAnswer() {

    }

    componentDidMount() {
        console.log("did mount");
        fetch("http://localhost:5000/api/regularRound/4")
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                this.setState({
                    answerBulk: data

                })
            })
    }

    nextQuestion() {

        let currnetData = this.state.answerBulk.pop();
        console.log(this.state.answerBulk);
        
        this.setState({
            currentQuestionData: currnetData,
            currentQuestion: this.state.currentQuestion + 1,
            answerBulk: this.state.answerBulk
        })
        if(this.state.answerBulk.length === 0){
            return(
                <div>
                    hello
                </div>
            )
        }
    }

    render() {

        const { currentQuestionData, currentQuestion } = this.state

        const viewController = () => {
            if (this.state.currentQuestion === 0) { return "Click Next Question to start" }
            console.log(this.props.multiView)
            if (this.props.multiView == true) {
                return (
                    <div id="multiView">
                        <Container>
                            <Row>
                                <Col><QuestionCard
                                    data={currentQuestionData['englishQuestion']}
                                />
                                    <br />
                                    <AnswerCard
                                        one={currentQuestionData['englishAnswerChoices'][0]}
                                        two={currentQuestionData['englishAnswerChoices'][1]}
                                        three={currentQuestionData['englishAnswerChoices'][2]}
                                        four={currentQuestionData['englishAnswerChoices'][3]}
                                        answer={currentQuestionData['correctAnswer']}

                                    />
                                </Col>
                                <Col>
                                    <QuestionCard
                                        data={currentQuestionData['malayalamQuestion']}
                                    />
                                    <br />
                                    <AnswerCard

                                        one={currentQuestionData['malayalamAnswerChoices'][0]}
                                        two={currentQuestionData['malayalamAnswerChoices'][1]}
                                        three={currentQuestionData['malayalamAnswerChoices'][2]}
                                        four={currentQuestionData['malayalamAnswerChoices'][3]}
                                        answer={currentQuestionData['correctAnswer']}

                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            }
            else {
                console.log(currentQuestionData['englishAnswerChoices'])
                console.log(this.state);

                return (
                    <div id="singleView">
                        <QuestionCard
                            data={currentQuestionData['englishQuestion']}
                        />
                        <br />
                        <AnswerCard
                            one={currentQuestionData['englishAnswerChoices'][0]}
                            two={currentQuestionData['englishAnswerChoices'][1]}
                            three={currentQuestionData['englishAnswerChoices'][2]}
                            four={currentQuestionData['englishAnswerChoices'][3]}
                            answer={currentQuestionData['correctAnswer']}
                        />
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
                        {/* disabled={this.state.answerBulk.length===0} */}
                        <button id="skipBtn" className="rounded-pill btn-warning"  onClick={this.skip}>Skip</button>
                        <button id="viewBtn" className="rounded-pill btn-danger" onClick={this.displayAnswer}>View Answer</button>
                        <button id="nextBtn" className="rounded-pill btn-success" onClick={this.nextQuestion} >Next Question</button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RegularRoundMaster
