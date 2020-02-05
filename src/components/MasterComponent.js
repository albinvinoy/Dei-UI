import React, { Component } from 'react'
import RegularRoundMaster from './Master/RegularRoundMaster'


let RegularRoundComponent = (english, malayalam, multiView, answer) => {
    return (
        <RegularRoundMaster
            englishQuestion={english}
            malayalamQuestion={malayalam}
            multiView={multiView}
            answer={answer}
        />
    )
}

class MasterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        if(true){
            return (
                <div>
                    {RegularRoundComponent("English", "Malayalam", true, "_2")}
                </div>
            )
        }
        
    }
}

export default MasterComponent
