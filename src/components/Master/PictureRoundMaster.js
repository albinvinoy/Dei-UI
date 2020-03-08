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
import { ButtonGroup } from "react-bootstrap";
import Notes from "../Notes";
import PictureRound from "../Rules/PictureRound"
import HeaderView from "../pages/HeaderView";
import "../../styles/PictureRoundMaster.css"

const storeName = "currentRound";
const getGroup = group => {
  console.log("Master " + group);
  let groupMapper = {
    "adult": 4,
    "sub-jr": 1,
    "jr": 2,
    "sr": 3
  };
  return groupMapper[group];
};

let multiViewComponent = (currentQuestion, imgSrc) => {
  return (
    <div id="multiView">
      <div className="container-fluid">
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
              <Col>
                {/* english */}
                <QuestionCard
                  data={
                    currentQuestion["englishQuestion"] +
                    "Nulla aute id occaecat veniam ex enim dolor pariatur Lorem."
                  }
                />
                {/* This is not loading */}
                <AnswerCard
                  data={
                    currentQuestion["englishAnswer"] +
                    " Dolor consectetur quis laboris nostrud eu est veniam sint."
                  }
                />
                <Notes
                  data={
                    " Culpa velit elit in est cillum aliqua irure. Occaecat sunt voluptate qui ea proident anim do adipisicing. Reprehenderit ut nisi ea minim. Voluptate incididunt nulla ad sit eu occaecat. Et aliquip consequat deserunt anim eu ut eu esse. Pariatur sint non labore ad sint culpa enim culpa. Enim amet occaecat dolor incididunt in veniam laboris."
                  }
                />
              </Col>
              <br />
              <Col>
                {/* malayalam */}
                <QuestionCard data={currentQuestion["malayalamQuestion"]} />
                {/* This is not loading */}
                <AnswerCard data={currentQuestion["malayalamAnswer"]} />
                     < br />
                <Notes
                  data={
                    " Culpa velit elit in est cillum aliqua irure. Occaecat sunt voluptate qui ea proident anim do adipisicing. Reprehenderit ut nisi ea minim. Voluptate incididunt nulla ad sit eu occaecat. Et aliquip consequat deserunt anim eu ut eu esse. Pariatur sint non labore ad sint culpa enim culpa. Enim amet occaecat dolor incididunt in veniam laboris."
                  }
                />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

let singleViewComponent = (prompt, currentQuestion, imgSrc) => {
  return (
    <div className="container-fluid">
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
            <QuestionCard data={currentQuestion["englishQuestion"]} />
            {/* This is not loading */}
            <AnswerCard data={currentQuestion["englishAnswer"]} />
            < br />
            <Notes
                  data={
                    " Culpa velit elit in est cillum aliqua irure. Occaecat sunt voluptate qui ea proident anim do adipisicing. Reprehenderit ut nisi ea minim. Voluptate incididunt nulla ad sit eu occaecat. Et aliquip consequat deserunt anim eu ut eu esse. Pariatur sint non labore ad sint culpa enim culpa. Enim amet occaecat dolor incididunt in veniam laboris."
                  }
                  />
          </div>
        </Col>
      </Row>
    </div>
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
    window.addEventListener("beforeunload", ev => {
      console.log("Closing the browser!!!");
      localStorage.clear();
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
        return (
          <div>
            <PictureRound />
          </div>
        );
      }
      if (this.props.multiView == true) {
        return (
          <div>
            {multiViewComponent(currentQuestion, this.state.displayImageSrc)}
          </div>
        );
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
              className="rounded-pill btn-info"
              onClick={this.hideImage}
            >
              <h4>Hide image from audience</h4>
            </button>
          </div>
        );
      } else {
        return (
          <div>
            {/* button control here */}
            <Row>
              <Col id="picButtons">
                <button
                  id="viewBtn"
                  className="rounded-pill btn-danger"
                  onClick={this.displayAnswer}
                >
                  <h4>SHOW ANSWER TO AUDIENCE</h4>
                </button>
              </Col>
              <Col id="picButtons">
                <button
                  id="showBtn"
                  className="rounded-pill btn-info"
                  onClick={this.showImage}
                >
                  <h4>DISPLAY IMAGE TO AUDIENCE</h4>
                </button>
              </Col>
              <Col id="picButtons">
                <button
                  id="nextBtn"
                  disabled={this.state.answerBulk.length == 0 ? 1 : 0}
                  className="rounded-pill btn-success"
                  onClick={this.nextQuestion}
                
                >
                  <h4>NEXT QUESTION</h4>
                </button>
              </Col>
            </Row>
          </div>
        );
      }
    };

    return (
      <div>
        <Timer seconds={this.state.timer} />
        <br />
        {imageComponent(1800, 900)}

        {setViewComponent(this.state.currentQuestion)}

        <br />
        <p style={{ opacity: this.state.answerBulk.length == 0 ? 1 : 0 }}
          id = "completedView">
          This is the last question of the round. Please close this window.{" "}
        </p>
        {dispalyButtons()}
      </div>
    );
  }
}

export default PictureRoundMaster;
