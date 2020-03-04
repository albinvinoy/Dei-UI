import React, { Component } from "react";
import "./styles/RoundChoose.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Row, Col } from "react-bootstrap";

class RoundChoose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      round: "",
      group: ""
    };
  }

  setRound(event) {
    console.log(event.target.value);
    this.setState({ round: event.target.value });
  }

  setGroup(event) {
    console.log(event.target.value);
    this.setState({ group: event.target.value });
  }

  start() {
    console.log(this.state);
    localStorage.removeItem("currentRound");
    localStorage.setItem("currentRound", JSON.stringify(this.state));
    window.open("http://localhost:3000/master", "_blank");
  }

  render() {
    return (
      <div id="roundChoose">
        <Row>
          <div onChange={this.setRound.bind(this)}>
            <input type="radio" value="regRound" name="round" />
            <span>Regular Round</span>
            <input type="radio" value="picRound" name="round" />
            <span>Picture Round</span>
            <input type="radio" value="quoteRound" name="round" />
            <span>Bible Quotes</span>
          </div>
        </Row>
        <span />
        <Row>
          <div onChange={this.setGroup.bind(this)}>
            <input type="radio" value="sub-jr" name="group" />
            <span> Sub Junior</span>
            <input type="radio" value="jr" name="group" /> <span> Junior</span>
            <input type="radio" value="sr" name="group" /> <span>Senior </span>
            <input type="radio" value="adult" name="group" /> <span>Adult</span>
          </div>
        </Row>
        <span />
        <Row >

        <div id="button">
          <OverlayTrigger
            placement="right"
            delay={{ show: 0, hide: 0 }}
            overlay={
              <Tooltip id={`tooltip-${"right"}`}>
                Click here to start new round. This will open a new window.
              </Tooltip>
            }
          >
            <button
              id="skipBtn"
              className="rounded-pill btn-warning"
              onClick={this.start.bind(this)}
            >
              Start Round
            </button>
          </OverlayTrigger>
        </div>
        </Row>
      </div>
    );
  }
}

export default RoundChoose;
