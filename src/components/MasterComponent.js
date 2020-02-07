import React, { Component } from 'react'
import RegularRoundMaster from './Master/RegularRoundMaster'

const storeName = "currentRound";

let RegularRoundComponent = (multiView) => {
    return (
        <RegularRoundMaster
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
        this.localStorageComponentUpdate = this.localStorageComponentUpdate.bind(this);
    }

    componentDidMount() {
        // window.addEventListener('storage', this.localStorageComponentUpdate());
        window.addEventListener('storage', (StorageEvent)=>{
            console.log("A new change detected in storage");
            console.log(StorageEvent)
            this.localStorageComponentUpdate(StorageEvent.newValue);
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
        const {round, group} = this.state;
        if(this.state === undefined || round === ""){
            return (
                <div>
                    This is in the round free.
                   
                </div>
            )
        }
        else if (group == "adult") {
            return(
                <div>
                    {RegularRoundComponent(true)}
                </div>
            )
        }
        else {
            return(
                <div>
                    {RegularRoundComponent( false)}
                </div>
            )
        }
    }
}

export default MasterComponent
