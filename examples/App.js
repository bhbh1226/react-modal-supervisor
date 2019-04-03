import React, { Fragment } from 'react'
import ModalSupervisor, { modalRootInit } from '../src';
import { STYLE_BACKGROUND, StyleManagerHOC } from '../src/components/StyleManager'
import styled from 'styled-components'

import './normalize.css'

modalRootInit()

const NewCustomStyle = StyleManagerHOC(({styleOverride}) => {
    styleOverride(STYLE_BACKGROUND, styled.div`
        background-color: blue;
        position: fixed;

        top: 0;
        left: 0;

        height: 100vh;
        width: 100%;

        z-index: 9000;
    `)

    return (
        <Fragment/>
    )
})

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <NewCustomStyle/>
                <ModalSupervisor>
                    {this.props.children}
                </ModalSupervisor>
            </div>
        )
    }
}

export default App