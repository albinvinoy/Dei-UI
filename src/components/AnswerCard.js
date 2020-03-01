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
      <Card border="dark"> 
        <Card.Body className="cardBody" style={{ backgroundColor: "#D3FAC1", border:12}}>
          {this.props.data}
        </Card.Body>
        {/* <Card.Footer>
     
    </Card.Footer> */}
      </Card>
    );
  }
}

export default AnswerCard;
