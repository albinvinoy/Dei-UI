import React, { Component } from 'react'
import QuestionCard from '../QuestionCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Timer from '../Timer';
import '../../styles/RegularRoundMaster.css'
import AnswerCard from '../AnswerCard';
import { useEffect, useState } from 'react'

const storeName = "currentRound";
const TimerComponent = ({ seconds }) => (
    new Timer(seconds)
)

const getGroup = (group) => {
    console.log("Master " + group)
    let groupMapper = {
        "adult": 4,
        "sub-jr": 1,
        "jr": 2,
        "sr": 3
    }
    return groupMapper[group];
}

var singleViewComponent = (currentQuestionData) => {
    return (
        <div id="singleView">
            <QuestionCard
                data={currentQuestionData['englishQuestion']}
            />
            <br />
            <AnswerCard
                one={currentQuestionData['englishAnswerChoices'][0]}
                
            />
        </div>
    )
}

let multiViewComponent = (currentQuestionData) => {
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

                        />
                    </Col>
                    <Col>
                        <QuestionCard
                            data={currentQuestionData['malayalamQuestion']}
                        />
                        <br />
                        <AnswerCard
                            one={currentQuestionData['malayalamAnswerChoices'][0]}

                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

class RegularRoundMaster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answerBulk: [''],
            currentQuestionData: {},
            currQuestionNumber: 0,
            totalNumQuestions: 0
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
        console.log(this.props.group);
        let getLocalItem = JSON.parse(localStorage.getItem(storeName))
        fetch("http://localhost:5000/api/regularRound/" + getGroup(getLocalItem["group"]))
            .then(response => response.json())
            .then(data => {
                this.setState({
                    answerBulk: data
                })
            })
    }

    nextQuestion() {

        let currnetData = this.state.answerBulk.pop();
        this.setState({
            currentQuestionData: currnetData,
            currQuestionNumber: this.state.currQuestionNumber + 1,
            answerBulk: this.state.answerBulk
        })


            let viewSave = {
                currentQuestion : currnetData['englishQuestion'],
            currentAnswer : currnetData['englishAnswerChoices'][0],
            currentQuestionMalayalam : currnetData['malayalamQuestion'],
            currentAnswerMalayalam : currnetData['malayalamAnswerChoices'][0],
            currentImage :  "",
            displayAnswer : false,
            displayImage: false,
            multiView : false,
            prompt : ""
            }
            localStorage.setItem("viewSave", JSON.stringify(viewSave));
    
        if (this.state.answerBulk.length === 0) {
            return(
                <div>
                    hello
                </div>
            )
        }

    }

    render() {

        const { currentQuestionData, currQuestionNumber } = this.state

        const viewController = () => {
            if (this.state.currQuestionNumber === 0) { return "Click Next Question to start" }
            if (this.props.multiView == true) {
                return (
                    <div>
                        {multiViewComponent(currentQuestionData)}
                    </div>
                )
            }
            else {
                return (
                    <div>
                        {singleViewComponent(currentQuestionData)}
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
                    <small style={{ opacity: this.state.answerBulk.length == 0 ? 1 : 0 }}> This is the last question of the round </small>
                    <Row>
                        <button id="skipBtn" className="rounded-pill btn-warning" onClick={this.skip}>Skip</button>
                        <button id="viewBtn" className="rounded-pill btn-danger" onClick={this.displayAnswer}>View Answer</button>
                        <Col md={{ span: 4, offset: 10 }}>
    <button id="nextBtn" className="rounded-pill btn-success" onClick={this.nextQuestion} >Next Question</button>

    </Col>                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RegularRoundMaster
