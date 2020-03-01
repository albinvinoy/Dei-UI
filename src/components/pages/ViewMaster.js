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
            REG ROUND
        </div>
    )
}

let pictureViewMaster = () => {
    return (
        <div>
            PIC ROUND
        </div>
    )
}

let quoteViewMaster = () => {
    return (
        <div>
            QUOTE ROUND
        </div>
    )
}

class ViewMaster extends Component {
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

   componentDidMount() {
     window.addEventListener("storage", (StorageEvent) => {
      this.onMountHelper(StorageEvent)
    });
  }

  onMountHelper = (StorageEvent) =>{
    console.log(localStorage.getItem("currentRound"));
    let currentRound = JSON.parse(StorageEvent.newValue);
    console.log(currentRound);

    if(currentRound != null){
      
    let getRound = currentRound["round"];
    let getGroup = currentRound["group"];
    console.log(getRound + " -> " + getGroup);

    let currnetData = JSON.parse(localStorage.getItem("currentData"));

    // checking state
   this.setState({
      group : getGroup,
      round : getRound
    })
  }

  }

  viewSelector = (group, round) => {
    
    if (group === null && round === null) {
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
    const {
      englishQuestion,
      englishAnswer,
      englishNotes,
      malayalamQuestion,
      malayalamAnswer,
      malayalamNotes,
      group,
      round,
      url
    } = this.state;

    let component = this.viewSelector(this.state.group, this.state.round);
console.log(this.state.group, this.state.round);
    if(component === componentEnum.DEFAULT){
        return(
            <div>
                DEFAULT from render.
                <p>{this.state.group, this.state.round}</p>
            </div>
        )
    }
    else if (component === componentEnum.REGULAR){
        
      return(
        <div>
      {regularViewMaster()}

        </div>

      );
    }
    else if (component == componentEnum.PICTURE){
      return(
        <div>
        {pictureViewMaster()}

        </div>
      )
    }
    else if (component == componentEnum.QUOTE){
      return (
        <div>
        {quoteViewMaster()}

        </div>
      )
    }
  }
}

export default ViewMaster;
