import React, { Fragment } from 'react'
import styled from 'styled-components'
import { STYLE_BACKGROUND, StyleManagerHOC, STYLE_INNER, STYLE_CLOSE_BUTTON_ABSOLUTE } from '../src/components/StyleManager'

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

const CustomInner = styled.div`
display: flex;

position: relative;

min-width: 30em;
min-height: 10em;

padding: 3em;

justify-content: center;
align-items: center;

border-radius: 5px;
background-color: green;
`

const CustomCBTNA = styled.button`
width: 30px;
height: 30px;

border: none;

background-color: white;
`

const NewCustomStyle = StyleManagerHOC(({styleOverride}) => {
    // styleOverride(STYLE_BACKGROUND, CustomBackground)
    styleOverride(STYLE_INNER, CustomInner)
    styleOverride(STYLE_CLOSE_BUTTON_ABSOLUTE, CustomCBTNA)

    return (<Fragment/>)
})

export default NewCustomStyle