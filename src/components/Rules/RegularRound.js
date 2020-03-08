import React, { Component } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export class RegularRound extends Component {


    render() {
        return (
          <div>
            <Container>
              <br />
              <h2>Regular Round Rules</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-secondary" style={{fontSize:"2em", textAlign:"center"}}>Consequat voluptate laborum commodo dolor eiusmod mollit.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em", textAlign:"center"}}>Laborum fugiat sint aliqua adipisicing aute Lorem.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em", textAlign:"center"}}>Pariatur voluptate occaecat commodo irure duis officia labore.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em", textAlign:"center"}}>Qui quis voluptate mollit eu cupidatat nisi ipsum irure sint.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em", textAlign:"center"}}>Elit enim consectetur nulla duis esse eu qui labore.</li>
              </ul>
            </Container>
          </div>
        );
    }
}

export default RegularRound
