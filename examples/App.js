import React, { Fragment } from 'react'
import ModalSupervisor, { modalRootInit } from '../src';
import { STYLE_BACKGROUND, StyleManagerHOC } from '../src/components/StyleManager'
import styled from 'styled-components'

import './normalize.css'

modalRootInit()

const CustomBackground = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    background-color: rgba(12, 243, 123, 0.4);
    position: fixed;

    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;

    z-index: 9000;
`

const NewCustomStyle = StyleManagerHOC(({styleOverride}) => {
    styleOverride(STYLE_BACKGROUND, CustomBackground)

    return (<Fragment/>)
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