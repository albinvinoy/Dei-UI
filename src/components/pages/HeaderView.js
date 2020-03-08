import React, { Component } from 'react'
import "../../styles/HeaderView.css";
import { Container, Col, Row } from 'react-bootstrap';

let roundRename = {
    regRound : "Regular Round",
    picRound : "Picture Round",
    quoteRound : "Bible Quote Round"
}

let groupRename = {
    'sub-jr' : "Sub Junior",
    'jr' : "Junior",
    "sr" :"Senior",
    "adult" : "Adult"
}


let getRoundName = (round) => {
    return roundRename[round];
}

let getGroupName = (group) =>{
    return groupRename[group];
}

class HeaderView extends Component {
    render() {
        let currRound = JSON.parse(localStorage.getItem("currentRound"));

        let round = getRoundName(currRound["round"]);
        let group = getGroupName(currRound["group"]);
        return (
          <div>
            <Container>
              <Row style={{ justifyContent: "center" }}>
                <h2>## /##</h2>
              </Row>
              <Row style={{ justifyContent: "center" }}>
                <div id="roundName">
                  <h3 style={{ color: "black" }}>
                    {" "}
                    {round} : {group}
                  </h3>
                </div>
              </Row>
            </Container>
          </div>
        );
    }
}

export default HeaderView
