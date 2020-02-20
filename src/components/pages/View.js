import React, { Component } from 'react'
const storeName = "currentRound";
import RegularView from './RegularView'


let RegularRoundView = (multiView) => {
    return (
        <div>
            <RegularView
                multiView={multiView}
            />
        </div>
    )
}

class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            round: "",
            group: "",
            currentQuestion: "",
            currentAnswer: "",
            currentQuestionMalayalam: "",
            currentAnswerMalayalam: "",
            currentImage: "",
            displayAnswer: false,
            displayImage: false,
            multiView: false,
            prompt: ""
        }
    }

    componentWillMount() {
        console.log("View Component Mounted")
        window.addEventListener('storage', (StorageEvent) => {
            let getLocalItem = JSON.parse(localStorage.getItem(storeName))
            this.setState({
                round: getLocalItem["round"],
                group: getLocalItem["group"],
                currentQuestion: getLocalItem["currentQuestion"],
                currentAnswer: getLocalItem["currentAnswer"],
                currentImage: getLocalItem["currentImage"],
                displayAnswer: getLocalItem["displayAnswer"],
                displayImage: getLocalItem["displayImage"]
            })
        })
    }

    render() {
        const { round, group, currentQuestion, currentAnswer, currentImage, displayAnswer, displayImage } = this.state;

        if (this.state === undefined || round === "") {
            return (
                <div>
                    This is in the round free.

                </div>
            )
        }
        else if (round == "regRound") {
            console.log("Before render Reg Round")
            return (
                <div>
                    {RegularRoundView(this.state.group == "adult" ? true : false)}
                </div>
            )
        }
        else if (round == "picRound") {
            console.log("Before rende Pic Round")
            return (
                <div>
                    {PictureRoundComponent(this.state.group == "adult" ? true : false)}
                </div>
            )
        }
        else if (round == "quoteRound") {
            return (
                <div>

                </div>
            )
        }
    }
}

export default View
