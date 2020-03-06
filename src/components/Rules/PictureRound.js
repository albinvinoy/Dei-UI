import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export class PictureRound extends Component {
    
    render() {
        return (
          <div>
            <Container>
              <h2>Rules for Picture Round</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-secondary" style={{fontSize:"2em"}}>Consequat voluptate laborum commodo dolor eiusmod mollit.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em"}}>Laborum fugiat sint aliqua adipisicing aute Lorem.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em"}}>Pariatur voluptate occaecat commodo irure duis officia labore.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em"}}>Qui quis voluptate mollit eu cupidatat nisi ipsum irure sint.</li>
                <li className="list-group-item text-secondary" style={{fontSize:"2em"}}>Elit enim consectetur nulla duis esse eu qui labore.</li>
              </ul>
            </Container>
          </div>
        );
    }
}

export default PictureRound
