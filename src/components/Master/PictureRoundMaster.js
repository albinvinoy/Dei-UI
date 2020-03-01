import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import QuestionCard from "../QuestionCard";
import Timer from "../Timer";
import AnswerCard from "../AnswerCard";
import HeaderComponent from "../HeaderComponent";

const storeName = "currentRound";
const getGroup = group => {
  console.log("Master " + group);
  let groupMapper = {
    adult: 4,
    "sub-jr": 1,
    jr: 2,
    sr: 3
  };
  return groupMapper[group];
};

let multiViewComponent = currentQuestion => {
  return (
    <div id="multiView">
      <Container>
        {/* Questions */}
        <Row>
          <Col>
            <QuestionCard
              // data={currentQuestion['englishQuestion']}
              data={currentQuestion["englishQuestion"]}
            />
            <br />
          </Col>
          <Col>
            <QuestionCard
              data={currentQuestion["malayalamQuestion"]}
            />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <AnswerCard data={currentQuestion["englishAnswer"]} />
            <br />
          </Col>
          <Col>
            <AnswerCard data={currentQuestion["malayalamAnswer"]} />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

let singleViewComponent = (prompt, currentQuestion, imgSrc) => {
  console.log("From view comp " + currentQuestion["englishAnswer"]);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Figure>
            <Figure.Image
              src={imgSrc} // TODO: update this
            />
            <Figure.Caption> This is the image caption.</Figure.Caption>
          </Figure>
        </Col>

        <Col md={6}>
          <div id="singleView">
            <br />
            <QuestionCard data={"prompt : " + prompt} />
            <br />
            <QuestionCard data={currentQuestion["englishQuestion"]} />
            {/* This is not loading */}
            <AnswerCard data={currentQuestion["englishAnswer"]} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

class PictureRoundMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerBulk: [""],
      firstQuestion: null,
      secondQuestion: null,
      questionDetail: [],
      currQuestionNumber: -1,
      displayImageSrc: "",
      displayImage: false,
      currentQuestion: null,
      currentAnswer: null
    };
    this.skip = this.skip.bind(this);
    this.displayAnswer = this.displayAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.hideImage = this.hideImage.bind(this);
    this.showImage = this.showImage.bind(this);
  }

  showImage() {
    this.setState({
      displayImage: true
    });
  }

  skip() {
    console.log(this.state);
  }

  displayAnswer() {}
  // temp solution-> async and await to put the setState on top of the call stack.
  async nextQuestion() {
    if (
      this.state.answerBulk.length != 0 &&
      this.state.firstQuestion == null &&
      this.state.secondQuestion == null
    ) {
      let item = this.state.answerBulk.pop();
      await this.setState({
        firstQuestion: item[1],
        secondQuestion: item[2],
        displayImageSrc: item["url"],
        displayImage: false,
        currQuestionNumber: this.state.currQuestionNumber + 1
      });
    }
    if (this.state.firstQuestion != null) {
      this.setState({
        currentQuestion: this.state.firstQuestion,
        firstQuestion: null,
        currQuestionNumber: this.state.currQuestionNumber + 1
      });
    } else if (this.state.secondQuestion != null) {
      this.setState({
        currentQuestion: this.state.secondQuestion,
        secondQuestion: null,
        currQuestionNumber: this.state.currQuestionNumber + 1
      });
    } else {
    }
  }

  hideImage() {
    this.setState({
      displayImage: false
    });
  }

  componentDidMount() {
    window.addEventListener("storage", StorageEvent => {});
    let getLocalItem = JSON.parse(localStorage.getItem(storeName));
    fetch(
      "http://localhost:5000/api/pictureRound/" +
        getGroup(getLocalItem["group"])
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          answerBulk: data
        });
      });
  }

  render() {
    const { currentQuestion, displayImage, displayImageSrc } = this.state;

    const imageComponent = (width, height, src) => {
      if (this.state.displayImage) {
        return (
          <Figure>
            <Figure.Image
              width={width}
              height={height}
              src={this.state.displayImageSrc} // TODO: update this
            />
            <Figure.Caption> This is the image caption.</Figure.Caption>
          </Figure>
        );
      }
    };

    const setViewComponent = currentQuestion => {
      console.log(currentQuestion);
      if (currentQuestion == null || displayImage == true) {
        return <div>Click Next Question to start.</div>;
      }
      if (this.props.multiView == true) {
        return <div>{multiViewComponent(currentQuestion)}</div>;
      } else {
        return (
          <div>
            {console.log(
              "This is the question set " + currentQuestion["englishAnswer"]
            )}
            {singleViewComponent(
              "This is prompt",
              currentQuestion,
              this.state.displayImageSrc
            )}
          </div>
        );
      }
    };

    const dispalyButtons = () => {
      if (this.state.displayImage) {
        return (
          <div>
            <button
              id="skipBtn"
              className="rounded-pill btn-warning"
              onClick={this.hideImage}
            >
              Hide Image
            </button>
          </div>
        );
      } else {
        return (
          <div>
            {/* <button
              id="skipBtn"
              className="rounded-pill btn-warning"
              onClick={this.skip}
            >
              Skip
            </button> */}
            <button
              id="viewBtn"
              className="rounded-pill btn-danger"
              onClick={this.displayAnswer}
            >
              View Answer
            </button>
            <button
              id="nextBtn"
              className="rounded-pill btn-success"
              onClick={this.nextQuestion}
            >
              Next Question
            </button>
            <button
              id="nextBtn"
              className="rounded-pill"
              onClick={this.showImage}
            >
              Show Image
            </button>
          </div>
        );
      }
    };

    return (
      <div>
        <Timer seconds={this.state.timer} />
        <br />
        <HeaderComponent />
        {imageComponent(1800, 900)}

        {setViewComponent(this.state.currentQuestion)}
        <Container>
          <br />
          <small
              style={{ opacity: this.state.answerBulk.length == 0 ? 1 : 0 }}
            >
              {" "}
              This is the last question of the round. Please close this window.{" "}
            </small>
          <Row>{dispalyButtons()}</Row>
        </Container>
      </div>
    );
  }
}

export default PictureRoundMaster;
