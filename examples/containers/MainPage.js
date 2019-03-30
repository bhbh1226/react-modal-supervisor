import React, { Component } from 'react'
import { 
    ModalManagerHOC, 
    MODAL_TYPE_ALERT, 
    MODAL_TYPE_CONFIRM, 
    MODAL_TYPE_LOADING
    } from '../../src/ModalManager';

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main-page">
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_ALERT, "안녕")}}>Open Modal</button>
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_CONFIRM, "정말?", () => {console.log('wow')}, () => {console.log('hello')})}}>Confirm Modal</button>
                <button onClick={() => {this.props.actions.createModal(MODAL_TYPE_LOADING, "정말?"); setInterval(() => {
                    this.props.actions.popModal()
                }, 2000);}}>Loading Modal</button>
            </div>
        )
    }
}

export default ModalManagerHOC(MainPage)