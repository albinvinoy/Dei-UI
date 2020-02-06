import React, { Component } from 'react'

class RoundSelector extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div >
                   <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Tutorials
    <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="menu1">
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
                        <li role="presentation" className="divider"></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RoundSelector
