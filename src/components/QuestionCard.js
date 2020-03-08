import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../styles/QuestionCard.css"
import { Container } from "react-bootstrap";

class QuestionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      // <Container>
        <div id="questionCard">
          {/* <Card border="dark"> */}
          {/* <Card.Body style={{ backgroundColor: "white" }}>
            {this.props.data}
          </Card.Body> */}
          <h3>Q: {this.props.data}</h3>
          {/* </Card> */}
        </div>
      // </Container>
    );
  }
}

export default QuestionCard;
