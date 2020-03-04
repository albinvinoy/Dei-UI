import React, { Component } from "react";
import RoundChoose from "../RoundChoose";
import "../styles/Welcome.css"
import { Container, Jumbotron } from "react-bootstrap";

let roundSelector = () => {
  return <RoundChoose />;
};

class WelcomePage extends Component {
  render() {
    return (
      <div id="welcome">
        <Container>
        {roundSelector()}
        <br />
        
        <h2>Welcome to Dei Verbum</h2>
        <p> Here goes some details about the program</p>

        </Container>
      </div>
    );
  }
}

export default WelcomePage;
