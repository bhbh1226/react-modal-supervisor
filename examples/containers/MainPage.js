import React, { Component } from 'react'
import { 
    ModalSupervisorHOC, 
    MODAL_TYPE_ALERT, 
    MODAL_TYPE_CONFIRM, 
    MODAL_TYPE_LOADING,
    MODAL_TYPE_PROMPT
    } from '../../src/ModalSupervisor';

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main-page">
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_ALERT, "안녕")}}>Open Modal</button>
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_CONFIRM, "정말?", () => {console.log('wow')}, () => {console.log('hello')})}}>Confirm Modal</button>
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_PROMPT, "프롬프트?", (param) => {console.log(param)}, () => {console.log('hello')})}}>Prompt Modal</button>
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_LOADING); setTimeout(() => {
                    this.props.actions.popModal()
                }, 2000);}}>Loading Modal</button>
            </div>
        )
    }
}

export default ModalSupervisorHOC(MainPage)