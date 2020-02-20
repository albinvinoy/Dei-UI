import React, { Component } from 'react'
import RegularRoundMaster from './Master/RegularRoundMaster'
import PictureRoundMaster from './Master/PictureRoundMaster';
const storeName = "currentRound";

let RegularRoundComponent = (multiView) => {
    return (
        <RegularRoundMaster
            multiView={multiView}
        />
    )
}

let PictureRoundComponent =(multiView) => {
    return(
        <PictureRoundMaster
        multiView={multiView}
        />
    )
}

class MasterComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        let getLocalItem = JSON.parse(localStorage.getItem(storeName));
        this.state = {
            round: getLocalItem == null ? "" : getLocalItem["round"],
            group: getLocalItem == null ? 0 : getLocalItem["group"]
        }
    }

    componentDidMount() {
        window.addEventListener('storage', (StorageEvent) => {
            console.log("A new change detected in storage");
            console.log(StorageEvent)
            // this.localStorageComponentUpdate(StorageEvent.newValue);
            let getLocalItem = JSON.parse(StorageEvent.newValue);
            this.setState({
                round: getLocalItem == null ? "" : getLocalItem["round"],
                group: getLocalItem == null ? 0 : getLocalItem["group"]
            })
        })
    }

    componentWillUnmount() {
        window.addEventListener('storage', this.localStorageComponentUpdate());
        localStorage.clear();
    }

    localStorageComponentUpdate(newValue) {

        let getLocalItem = JSON.parse(newValue);
        this.setState({
            round: getLocalItem == null ? "" : getLocalItem["round"],
            group: getLocalItem == null ? 0 : getLocalItem["group"]
        })
    }

    render() {
        const { round, group } = this.state;
        if (this.state === undefined || round === "") {
            return (
                <div>
                    This is in the round free.

                </div>
            )
        }
        else if (round == "regRound") {
            console.log("Before render Reg Round")
            return (
                <div>
                    {RegularRoundComponent(this.state.group == "adult" ? true : false)}
                </div>
            )
        }
        else if(round == "picRound"){
            console.log("Before rende Pic Round")
            return(
                <div>
                    {PictureRoundComponent(this.state.group =="adult" ? true : false)}
                </div>
            )
        }
        else if(round =="quoteRound"){
            return(
                <div>

                </div>
            )
        }
    }
}

export default MasterComponent
