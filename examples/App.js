import React, { Fragment } from 'react'
import ModalSupervisor, { modalRootInit } from '../src';

import NewCustomStyle from './NewCustomStyle';
import './normalize.css'

modalRootInit()

class App extends React.Component {
    render() {
        return (
            <div id="app">
                {/* <NewCustomStyle/> */}
                <ModalSupervisor>
                    {this.props.children}
                </ModalSupervisor>
            </div>
        )
    }
}

export default App