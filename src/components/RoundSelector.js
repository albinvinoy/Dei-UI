import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class RoundSelector extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div >
                   <ButtonToolbar>
    {['right'].map(direction => (
      <DropdownButton
        drop={direction}
        variant="secondary"
        title={` Drop ${direction} `}
        id={`dropdown-button-drop-${direction}`}
        key={direction}
      >

        <Dropdown.Item >Regular Round</Dropdown.Item>
        <Dropdown.Item eventKey="2">Picture Round</Dropdown.Item>
        <Dropdown.Item eventKey="3">Last Round</Dropdown.Item>
        {/* <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
      </DropdownButton>
    ))}
  </ButtonToolbar>

            </div>
        )
    }
}

export default RoundSelector
