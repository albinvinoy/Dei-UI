import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import QuestionCard from '../QuestionCard'
import Timer from '../Timer';

const storeName = "currentRound";
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

let multiViewComponent = (currentQuestion) => {
    return (
        <div id="multiView">
            <Container>
                <Row>
                    <Col><QuestionCard
                        // data={currentQuestion['englishQuestion']}
                        data={currentQuestion['englishQuestion']}
                    />
                        <br />

                    </Col>
                    <Col>
                        <QuestionCard
                            // data={currentQuestion['malayalamQuestion']}
                            data={currentQuestion['malayalamQuestion']}
                        />
                        <br />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

let singleViewComponent = (promot, currentQuestion) => {
    console.log("This is single view");
    console.log(currentQuestion)
    return (

        <div id="singleView">
            <br />
            <QuestionCard data={"prompt : " + promot} />
            <br />
            <QuestionCard data={currentQuestion['englishQuestion']} />
        </div>
    )
}

class PictureRoundMaster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answerBulk: [''],
            firstQuestion: null,
            secondQuestion: null,
            questionDetail: [],
            currQuestionNumber: -1,
            displayImageSrc: '',
            displayImage: false,
            currentQuestion: null
        }
        this.skip = this.skip.bind(this);
        this.displayAnswer = this.displayAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.hideImage = this.hideImage.bind(this);
        this.showImage = this.showImage.bind(this);
    }

    showImage() {
        this.setState({
            displayImage: true
        })
    }

    skip() {
        console.log(this.state)
    }

    displayAnswer() {

    }

    nextQuestion() {
        if (this.state.answerBulk.length != 0
            && this.state.firstQuestion == null
            && this.state.secondQuestion == null
        ) {
            let item = this.state.answerBulk.pop();
            console.log(item[1])
            console.log(item[2])
            this.setState({
                firstQuestion: item[1],
                secondQuestion: item[2],
                displayImage: true,
                currQuestionNumber: this.state.currQuestionNumber + 1
            })
        }
        if (this.state.firstQuestion != null) {
            this.setState({
                currentQuestion: this.state.firstQuestion,
                firstQuestion: null,
                currQuestionNumber: this.state.currQuestionNumber + 1
            }, () => {
                console.log(this.state.currentQuestion)
                console.log("1 ")
            })
        }
        else if (this.state.secondQuestion != null) {
            this.setState({
                currentQuestion: this.state.secondQuestion,
                secondQuestion: null,
                currQuestionNumber: this.state.currQuestionNumber + 1
            }, () => {
                console.log(this.state.currentQuestion)
                console.log("2 ")
            })
        }
    }

    hideImage() {
        this.setState({
            displayImage: false
        })
    }

    componentDidMount() {
        console.log("Picture Component mounted");
        window.addEventListener("storage", (StorageEvent) => {
            console.log("PC There is a chagne in the storage.")
        })
        let getLocalItem = JSON.parse(localStorage.getItem(storeName))
        fetch("http://localhost:5000/api/pictureRound/" + getGroup(getLocalItem["group"]))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    answerBulk: data
                })
            })
    }

    render() {
        const { currentQuestion, displayImage, displayImageSrc } = this.state

        const imageComponent = (width, height, src) => {
            if (this.state.displayImage) {
                return (
                    <Figure>
                        <Figure.Image
                            width={width}
                            height={height}
                            src={src}
                        />
                        <Figure.Caption> This is the image caption.</Figure.Caption>
                    </Figure>
                )
            }
            else {

            }
        }

        const viewController = (currentQuestion) => {
            console.log(currentQuestion)
            console.log("view")
            if (currentQuestion == null || displayImage == true) {
                return (
                    <div>LOADING</div>
                )
            }
            if (this.props.multiView == true) {
                return (
                    <div>
                        {multiViewComponent("", currentQuestion)}
                    </div>
                )
            }
            else {
                return (
                    <div>
                        {singleViewComponent("", currentQuestion)}
                    </div>
                )
            }
        }

        const dispalyButtons = () => {
            if (this.state.displayImage) {
                return (
                    <div>

                        <button id="skipBtn" className="rounded-pill btn-warning" onClick={this.hideImage}>Hide Image</button>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <button id="skipBtn" className="rounded-pill btn-warning" onClick={this.skip}>Skip</button>
                        <button id="viewBtn" className="rounded-pill btn-danger" onClick={this.displayAnswer}>View Answer</button>
                        <button id="nextBtn" className="rounded-pill btn-success" onClick={this.nextQuestion} >Next Question</button>
                        <button id="nextBtn" className="rounded-pill" onClick={this.showImage} >Show Image</button>
                    </div>
                )
            }
        }


        return (
            <div>
                <Timer seconds={this.state.timer} />
                {imageComponent(1800, 800, "https://placekitten.com/g/1800/600")}
                {viewController(currentQuestion)}
                <Container>
                    <br />
                    <small style={{ opacity: this.state.answerBulk.length == 0 ? 1 : 0 }}> This is the last question of the round </small>
                    <Row>
                        {dispalyButtons()}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PictureRoundMaster
