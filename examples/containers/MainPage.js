import React, { Component } from 'react'
import { 
    ModalSupervisorHOC, 
    } from '../../src';

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main-page">
                <button onClick={async () => {console.log(await this.props.actions.createModal("MODAL_TYPE_WOW", "안녕"))}}>Open Modal</button>
                <button onClick={async () => {console.log(await this.props.actions.createModal("MODAL_TYPE_CONFIRM", "정말?"))}}>Confir asm Modal</button>
                <button onClick={async () => {console.log(await this.props.actions.createModal("MODAL_TYPE_PROMPT", "프롬프트?"))}}>Prompt asd Modal</button>
                <button onClick={() => {this.props.actions.createModal("MODAL_TYPE_LOADING"); setTimeout(async () => {
                    console.log(await this.props.actions.popModal())
                    console.log('wow')
                }, 2000);}}>Loading Modal</button>
            </div>
        )
    }
}

export default ModalSupervisorHOC(MainPage)