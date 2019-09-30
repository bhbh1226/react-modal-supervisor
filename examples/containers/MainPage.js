import React, { Component } from 'react'
import { 
    ModalSupervisorHOC, 
    } from '../../src';
import styled from 'styled-components'

    
const Button = styled.button`
    padding: 0.6em 1em;
    margin: 1em;
    border: none;
    border-radius: 2px;
    background-color: rgba(25, 157, 219, 0.65);
    color: white;

    outline: none;

    transition: 100ms;

    cursor: pointer;

    &::-moz-focus-inner { 
        border: 0;
        outline: 0;
    }

    &:-moz-focusring {
        border: 0;
        outline: 0;
    }

    &:hover {
        background-color: rgba(25, 157, 219, 0.7);
    }

    &:active {
        background-color: rgba(25, 157, 219, 1);
    }
`
class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main-page">
                <Button onClick={async () => {await this.props.modalActions.createModal("MODAL_TYPE_ALERT",
                    {title: "Are you sure?", content: "Are you sure about that? You think half about it. Just stop your crying It's a sign of the times Welcome to the final show Hope you're wearing your best clothes You can't bribe the door on your way to the sky You look pretty good down here But you ain't really good"}, 
                    {hello: 'yeah'})}}>Open Modal</Button>
                <Button onClick={async () => {await this.props.modalActions.createModal("MODAL_TYPE_WOW",
                    {title: "Are you sure?", content: "Are you sure about that? You think half about it. Just stop your crying It's a sign of the times Welcome to the final show Hope you're wearing your best clothes You can't bribe the door on your way to the sky You look pretty good down here But you ain't really good"}, 
                    {hello: 'yeah'})}}>WOW Modal</Button>
                <Button onClick={async () => {await this.props.modalActions.createModal("MODAL_TYPE_CONFIRM", 
                    {title: "Are you sure?", content: "Are you sure about that? You think half about it. Just stop your crying It's a sign of the times Welcome to the final show Hope you're wearing your best clothes You can't bribe the door on your way to the sky You look pretty good down here But you ain't really good"}, 
                    )}}>Confirm Modal</Button>
                <Button onClick={async () => {await this.props.modalActions.createModal("MODAL_TYPE_PROMPT", 
                    {title: "Are you sure?", content: "Are you sure about that? You think half about it. Just stop your crying It's a sign of the times Welcome to the final show Hope you're wearing your best clothes You can't bribe the door on your way to the sky You look pretty good down here But you ain't really good", placeholder: "Please Write Anything"}, 
                    )}}>Prompt Modal</Button>
                <Button onClick={() => {this.props.modalActions.createModal("MODAL_TYPE_LOADING"); setTimeout(async () => {
                    await this.props.modalActions.popModal()
                    await this.props.modalActions.createModal("MODAL_TYPE_ALERT", 
                        {title: "Are you sure?", content: "Are you sure about that? You think half about it. Just stop your crying It's a sign of the times Welcome to the final show Hope you're wearing your best clothes You can't bribe the door on your way to the sky You look pretty good down here But you ain't really good"}, 
                    )
                }, 2000);}}>Loading Modal</Button>
            </div>
        )
    }
}

export default ModalSupervisorHOC(MainPage)