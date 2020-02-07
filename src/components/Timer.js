import React, { Component } from 'react'
import '../styles/Timer.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Timer extends Component {

    constructor(props) {
        super(props)
        

        this.state = {
            currentSeconds: 0,
            running: false,
            barPercentage: 100,
            variant: "success"
        }
        this.timer = 0;
        // this.setState({
        //     currentSeconds : this.props.seconds
        // })
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    startTimer() {
        clearInterval(this.timer)
        this.setState({
            running: true
        }, () => {
            if (this.state.running) {
                this.timer = setInterval(this.countDown, 1000);
            }
        })
    }

    countDown() {
        let remainTime = this.state.currentSeconds - 1;
        let remainBar = Math.round((remainTime * 100) / this.props.roundTime);
        this.setState({
            currentSeconds: remainTime,
            barPercentage: remainBar,
            variant: this.colorDefinition(remainBar)
        })

        if (remainTime === 0) {
            clearInterval(this.timer);
        }
    }

    colorDefinition(barValue) {
        if (barValue <= 25) {
            return "danger";
        }
        else if (barValue <= 65) {
            return "warning"
        }
        else {
            return "success";
        }
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({
            running: false,
            currentSeconds: this.props.roundTime,
            barPercentage: 100,
            variant: "success"
        })
    }

    render() {
        return (
            <div>
                <div className="timer">
                    <h2 id="clock"> {this.state.currentSeconds} </h2>
                </div>
                <ProgressBar animated variant={this.state.variant} now={this.state.barPercentage} />
                <Container>
                    <Row>
                        <Col><button onClick={this.startTimer} id="startButton">Start</button></Col>
                        <Col><button onClick={this.stopTimer} id="stopButton">Stop</button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Timer
