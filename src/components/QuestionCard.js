import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../styles/QuestionCard.css"

class QuestionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="questionCard">
        {/* <Card border="dark"> */}
          {/* <Card.Body style={{ backgroundColor: "white" }}>
            {this.props.data}
          </Card.Body> */}
          <h3>{this.props.data}</h3>
        {/* </Card> */}
      </div>
    );
  }
}

export default QuestionCard;
