import React from 'react'
import ModalSupervisor from '../src';

import './normalize.css'
// import Header from './components/Header'

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