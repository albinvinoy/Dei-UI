import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import "../../styles/TemplateView.css"

export class TemplateView extends Component {
    render() {
        return (
          <div id="welcome">
            <br />
            <Container>
              <h2 id="viewTemplateHeader">Welcome to Dei Verbum 2020</h2>
              <br />
              <h3 style={{color:"black"}}>Please wait while we set up the round</h3>
              <br />
              <p id="viewTemplateIntro">
                {" "}
                Tempor cillum elit tempor excepteur eu consectetur amet dolor.
                Reprehenderit consequat et laborum in velit ipsum laboris irure
                elit laborum. Non elit ullamco do eiusmod incididunt proident
                laborum eu aliquip nisi nisi deserunt mollit. Minim aliquip
                aliquip et id est ßexercitation cupidatat pariatur culpa. Anim
                sint mollit ea labore. Irure amet adipisicing in adipisicing
                aliqua incididunt laboris officia adipisicing irure dolor.
                Excepteur ad ipsum anim dolor ad deserunt. Nisi reprehenderit
                quis quis ea est dolor. Cupidatat Lorem anim mollit labore
                laboris irure ipsum quis eiusmod. Pariatur exercitation et ipsum
                occaecat ullamco do aute ipsum officia aliqua in irure enim
                nulla. Lorem sunt aliquip do adipisicing elit. Enim aliquip
                nostrud minim irure excepteur mollit voluptate excepteur non
                voluptate mollit minim adipisicing. Dolore fugiat do voluptate
                quis dolore ad proident commodo. Ut magna pariatur do Lorem et
                ullamco. Ullamco anim in exercitation enim incididunt voluptate
                ullamco adipisicing voluptate mollit. Incididunt occaecat
                proident ex reprehenderit aute anim officia consectetur
                consequat. Sit anim nostrud do officia voluptate nostrud fugiat
                sint ea non ut nostrud cillum. Proident sunt exercitation nulla
                Lorem reprehenderit. Cillum ad nulla qui sunt. Irure ex fugiat
                adipisicing culpa aliquip consequat voluptate est veniam magna
                labore duis reprehenderit. Irure est laboris est fugiat
                exercitation ullamco pariatur adipisicing ex adipisicing.{" "}
              </p>
            </Container>
          </div>
        );
    }
}

export default TemplateView
