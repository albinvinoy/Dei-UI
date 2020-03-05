import React, { Component } from "react";
import QuestionCard from "../QuestionCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AnswerCard from "../AnswerCard";
import RegularRound from "../Rules/RegularRound";

let multiViewComponent = state => {
  let showAnswer = JSON.parse(localStorage.getItem("displayAnswer"));
  if (showAnswer) {
    return (
      <div id="multiView">
        <Container fluid={true}>
          <Row>
            <Col>
              <QuestionCard data={state["englishQuestion"]} />
            </Col>
            <Col>
              <QuestionCard data={state["malayalamQuestion"]} />
            </Col>
          </Row>
          <Row>
            <Col>
              <AnswerCard data={state["englishAnswer"]} />
            </Col>
            <Col>
              <AnswerCard data={state["malayalamAnswer"]} />
            </Col>
          </Row>

        </Container>
      </div>
    );
  } else {
    return (
      <div id="multiView">
        <Container fluid={true}>
          <Row>
            <Col>
              <QuestionCard data={state["englishQuestion"]} />
            </Col>
            <Col>
              <QuestionCard data={state["malayalamQuestion"]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

let singleViewComponent = state => {
  let showAnswer = JSON.parse(localStorage.getItem("displayAnswer"));
  if (showAnswer) {
    return (
      <div id="singleView">
        <br />
        <QuestionCard data={state["englishQuestion"]} />
        <AnswerCard data={state["englishAnswer"]} />
      </div>
    );
  } else {
    return (
      <div id="singleView">
        <br />
        <QuestionCard data={state["englishQuestion"]} />
      </div>
    );
  }
};

class RegularView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      englishQuestion: null,
      englishAnswer: null,
      englishNotes: null,
      malayalamQuestion: null,
      malayalamAnswer: null,
      malayalamNotes: null,
      group: null,
      book: null,
      round: null,
      url: null
    };
  }

  componentWillMount() {
    window.addEventListener("storage", StorageEvent => {
      let localData = localStorage.getItem("viewSave");
      let roundDetails = localStorage.getItem("currentRound");
      if (localData != null && roundDetails != null) {
        let currentData = JSON.parse(localData);
        let currentRound = JSON.parse(roundDetails);

        this.setState({
          englishQuestion: currentData["englishQuestion"],
          englishAnswer: currentData["englishAnswer"],
          englishNotes: currentData["englishPrompt"],
          malayalamQuestion: currentData["malayalamQuestion"],
          malayalamAnswer: currentData["malayalamAnswer"],
          malayalamNotes: currentData["malayalamPrompt"],
          group: currentRound["group"],
          book: null,
          round: currentRound["round"],
          url: null
        });
      }
    });
  }

  render() {
    let localData = localStorage.getItem("viewSave");
    let currentRound = JSON.parse(localStorage.getItem("currentRound"));
    if (localData == null) {
      return (<div><RegularRound /></div>);
    }

    if (currentRound["group"] === "adult") {
      return <div>{multiViewComponent(this.state)}</div>;
    } else {
      return <div>{singleViewComponent(this.state)}</div>;
    }
  }
}

export default RegularView;
