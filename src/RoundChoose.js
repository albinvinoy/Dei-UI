import React, { Component } from "react";
import "./styles/RoundChoose.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Row, Col, ButtonGroup } from "react-bootstrap";

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
        <br />
        <Row>
          <Col>
            <ButtonGroup vertical>
              <button
                className="btn-block"
                value="regRound"
                name="round"
                id="round"
                onClick={this.setRound.bind(this)}
              >
                Regular Round
              </button>
              <button
                className="btn-block"
                value="picRound"
                name="round"
                id="round"
                onClick={this.setRound.bind(this)}
              >
                Picture Round
              </button>
              <button
                className="btn-block"
                value="quoteRound"
                name="round"
                id="round"
                onClick={this.setRound.bind(this)}
              >
                Bible Quotes Round
              </button>
            </ButtonGroup>
          </Col>

          <Col>
            <ButtonGroup vertical>
              <button
                className=" btn-block"
                value="sub-jr"
                name="group"
                id="group"
                onClick={this.setGroup.bind(this)}
              >
                Sub Junior
              </button>
              <button
                className=" btn-block"
                value="jr"
                name="group"
                id="group"
                onClick={this.setGroup.bind(this)}
              >
                Junior
              </button>
              <button
                className=" btn-block"
                value="sr"
                name="group"
                id="group"
                onClick={this.setGroup.bind(this)}
              >
                Senior Round
              </button>
              <button
                className=" btn-block"
                value="adult"
                name="group"
                id="group"
                onClick={this.setGroup.bind(this)}
              >
                Adult
              </button>
            </ButtonGroup>
          </Col>

          <div id="button">
            <button
              id="startBtn"
              className="btn-block"
              onClick={this.start.bind(this)}
            >
              Start
            </button>
          </div>
        </Row>
      </div>
    );
  }
}

export default RoundChoose;
