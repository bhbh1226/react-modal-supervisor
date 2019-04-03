import React from 'react'
import ModalSupervisor, { modalRootInit } from '../src';

import './normalize.css'
// import Header from './components/Header'

modalRootInit()

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <ModalSupervisor>
                    {this.props.children}
                </ModalSupervisor>
            </div>
        )
    }
}

export default App