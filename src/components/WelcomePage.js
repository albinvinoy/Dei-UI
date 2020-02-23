import React, { Component } from "react";
import RoundSelector from "./RoundSelector";
import RoundChoose from "../RoundChoose";

let roundSelector = () => {
  return <RoundChoose />;
};

class WelcomePage extends Component {
  render() {
    return (
      <div>
        {roundSelector()}
        <h1>Welcome to Dei Verbum</h1>
        <p> Here goes some details about the program</p>
      </div>
    );
  }
}

export default WelcomePage;
