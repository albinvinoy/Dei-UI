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
          <br />
        <h2>Welcome to Dei Verbum</h2>
        <p id="rules">1. Choose a round.</p>
        <p id="rules"> 2. Choose a group.</p>
        <p id="rules"> 3. Click Start!</p>
        {roundSelector()}
        <br />
        
        
        <p>  Tempor cillum elit tempor excepteur eu consectetur amet dolor. Reprehenderit consequat et laborum in velit ipsum laboris irure elit laborum. Non elit ullamco do eiusmod incididunt proident laborum eu aliquip nisi nisi deserunt mollit.

Minim aliquip aliquip et id est exercitation cupidatat pariatur culpa. Anim sint mollit ea labore. Irure amet adipisicing in adipisicing aliqua incididunt laboris officia adipisicing irure dolor.

Excepteur ad ipsum anim dolor ad deserunt. Nisi reprehenderit quis quis ea est dolor. Cupidatat Lorem anim mollit labore laboris irure ipsum quis eiusmod.

Pariatur exercitation et ipsum occaecat ullamco do aute ipsum officia aliqua in irure enim nulla. Lorem sunt aliquip do adipisicing elit. Enim aliquip nostrud minim irure excepteur mollit voluptate excepteur non voluptate mollit minim adipisicing. Dolore fugiat do voluptate quis dolore ad proident commodo. Ut magna pariatur do Lorem et ullamco.

Ullamco anim in exercitation enim incididunt voluptate ullamco adipisicing voluptate mollit. Incididunt occaecat proident ex reprehenderit aute anim officia consectetur consequat. Sit anim nostrud do officia voluptate nostrud fugiat sint ea non ut nostrud cillum. Proident sunt exercitation nulla Lorem reprehenderit. Cillum ad nulla qui sunt. Irure ex fugiat adipisicing culpa aliquip consequat voluptate est veniam magna labore duis reprehenderit. Irure est laboris est fugiat exercitation ullamco pariatur adipisicing ex adipisicing. </p>

        </Container>
      </div>
    );
  }
}

export default WelcomePage;
