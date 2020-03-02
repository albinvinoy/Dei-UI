import React, { Component } from "react";
import RegularView from "./RegularView";
import QuotesView from "./QuotesView";

const componentEnum = {
  DEFAULT: "DEFAULT",
  REGULAR: "REGULAR",
  PICTURE: "PICTURE",
  QUOTE: "QUOTES",
  RULES: "RULES"
};

const storageComponents = {
  REGULAR: "regRound",
  PICTURE: "picRound",
  QUOTES: "quoteRound"
};

let regularViewMaster = () => {
  return (
    <div>
      <RegularView />
    </div>
  );
};

let pictureViewMaster = () => {
  return <div>PIC ROUND</div>;
};

let quoteViewMaster = () => {
  return <div>QUOTE ROUND</div>;
};

class ViewMaster extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   // englishQuestion: null,
    //   // englishAnswer: null,
    //   // englishNotes: null,
    //   // malayalamQuestion: null,
    //   // malayalamAnswer: null,
    //   // malayalamNotes: null,
    //   // group: null,
    //   // book: null,
    //   // round: null,
    //   // url: null
    // };
  }

  componentWillMount() {
    window.addEventListener("storage", StorageEvent => {
      this.onMountHelper(StorageEvent);
      this.setState({});
    });
  }

  onMountHelper = StorageEvent => {
    let currentRound = JSON.parse(localStorage.getItem("currentRound"));
    if (currentRound != null) {
      let getRound = currentRound["round"];
      let getGroup = currentRound["group"];
      let currnetData = JSON.parse(localStorage.getItem("currentData"));
    }
  };

  viewSelector = (group, round) => {
    if (round === null && round === null) {
      return componentEnum.DEFAULT;
    } else if (round === storageComponents.REGULAR) {
      return componentEnum.REGULAR;
    } else if (round === storageComponents.PICTURE) {
      return componentEnum.PICTURE;
    } else if (round === storageComponents.QUOTES) {
      return componentEnum.QUOTE;
    } else {
      return componentEnum.DEFAULT;
    }
  };

  render() {
    let roundDetails = localStorage.getItem("currentRound");
    let currentRound = JSON.parse(localStorage.getItem("currentRound"));
    if(currentRound == null){
      return(
        <div>
          <p> Show the template page </p>
        </div>
      )
    }
    console.log(currentRound);
    let round = currentRound["round"];
    let group = currentRound["group"];
    let component = this.viewSelector(group, round);
    console.log(round + " -> " + group);
    if (component === componentEnum.DEFAULT) {
      return (
        <div>
          DEFAULT from render.
          {/* <p>{this.state.group, this.state.round}</p> */}
        </div>
      );
    } else if (component === componentEnum.REGULAR) {
      return <div>{regularViewMaster()}</div>;
    } else if (component == componentEnum.PICTURE) {
      return <div>{pictureViewMaster()}</div>;
    } else if (component == componentEnum.QUOTE) {
      return <div>{quoteViewMaster()}</div>;
    }
  }
}

export default ViewMaster;
