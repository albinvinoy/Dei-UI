import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/AnswerCard.css";

class AnswerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="answerCard">
        <h4>{this.props.data}</h4>
      </div>
    
    );
  }
}

export default AnswerCard;
