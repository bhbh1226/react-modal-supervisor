import React from 'react'
import ModalManager from '../src/ModalSupervisor';
import './normalize.css'
// import Header from './components/Header'

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <ModalManager>
                    {this.props.children}
                </ModalManager>
            </div>
        )
    }
}

export default App