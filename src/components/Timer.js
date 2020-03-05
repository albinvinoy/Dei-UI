import React, { Component } from "react";
import "../styles/Timer.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        roundTimer : this.props.time != null ? this.props.time : 0,
      currentSeconds: this.props.time != null ? this.props.time : 0, // this also needs to be set to the actual timer
      running: false,
      barPercentage: 100,
      variant: "success"
    };
    this.timer = 0;
    // this.setState({
    //     currentSeconds : this.props.seconds
    // })
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer() {
    clearInterval(this.timer);
    this.setState(
      {
        running: true
      },
      () => {
        if (this.state.running) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    );
  }

  countDown() {
    let remainTime = this.state.currentSeconds - 1;
    let remainBar = Math.round((remainTime * 100) / this.props.roundTime);
    if (this.state.currentSeconds <= 0) {
      this.stopTimer();
    }
    this.setState({
      currentSeconds: remainTime,
      barPercentage: remainBar,
      variant: this.colorDefinition(remainBar)
    });

    if (remainTime === 0) {
      clearInterval(this.timer);
    }
  }

  colorDefinition(barValue) {
    if (barValue <= 25) {
      return "danger";
    } else if (barValue <= 65) {
      return "warning";
    } else {
      return "success";
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      running: false,
      currentSeconds: this.state.roundTimer, // set this to the actual time from the props
      barPercentage: 100,
      variant: "success"
    });
  }

  render() {
    return (
      <div>
        <span />
        <Container>
          <Row>
            <Col >
              <button
                onClick={this.startTimer}
                id="startButton"
                className="rounded-pill btn-warning"
              >
                <h1> Start </h1>
              </button>
            </Col>
            <Col style={{float:"left"}}>
              <div className="timer">
                <h1 id="clock"> {this.state.currentSeconds} </h1>
              </div>
            </Col>
            {/* <Col style={{ span: 2, offset: 0 }}>
              <button
                onClick={this.stopTimer}
                id="stopButton"
                className="rounded-pill btn-danger"
              >
                ||
              </button>
            </Col> */}
          </Row>
        </Container>
        <span />

        {/* <ProgressBar
          animated
          variant={this.state.variant}
          now={this.state.barPercentage}
        /> */}
      </div>
    );
  }
}

export default Timer;
