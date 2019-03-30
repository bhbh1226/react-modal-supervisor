import React, { Component } from 'react'
import ModalManager from '../components/modal/ModalManager';

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main-page">
                <button>Open Modal</button>
                <ModalManager></ModalManager>
            </div>
        )
    }
}

export default MainPage