import React, { Component } from 'react'
import styled from 'styled-components'
import { ModalBackground as MB, ModalInner as MI, ModalActionContainer as MAC, PromptInputText as PIT } from './Container'

let tMB = null
let tMI = null
let tMAC = null
let tPIT = null

let ModalBackground = ({children}) => { return tMB ? <tMB>{children}</tMB> : <MB>{children}</MB> }
let ModalInner = ({children}) => { return tMI ? <tMI>{children}</tMI> : <MI>{children}</MI> }
let ModalActionContainer = ({children}) => { return tMAC ? <tMAC>{children}</tMAC> : <MAC>{children}</MAC> }
let PromptInputText = ({children}) => { return tPIT ? <tPIT>{children}</tPIT> : <PIT>{children}</PIT> }

/* Constants */
const STYLE_BACKGROUND = 200
const STYLE_INNER = 201
const STYLE_ACTION_CONTAINER = 202
const STYLE_INPUT_TEXT = 203

function styleOverride(style, component) {
    switch(style) {
        case STYLE_BACKGROUND:
            tMB = component
            break;
        case STYLE_INNER:
            tMI = component
            break;
        case STYLE_ACTION_CONTAINER:
            tMAC = component
            break;
        case STYLE_INPUT_TEXT:
            tPIT = component               
            break;
    }
}

class StyleManager extends Component {
    constructor(props) {
        super(props)
    }

    styleOverride(style, component) {
        switch(style) {
            case STYLE_BACKGROUND:
                ModalBackground = component || MB
                break;
            case STYLE_INNER:
                ModalInner = component || MI
                break;
            case STYLE_ACTION_CONTAINER:
                ModalActionContainer = component || MAC
                break;
            case STYLE_INPUT_TEXT:
                PromptInputText = component || PIT               
                break;
        }
    }
}

const StyleManagerHOC = (WrappedComponent) => (props) => {
    return (
        <WrappedComponent styleOverride={styleOverride} {...props} />
    )
}

export { 
    STYLE_BACKGROUND, STYLE_INNER, STYLE_ACTION_CONTAINER, STYLE_INPUT_TEXT,
    ModalBackground, ModalInner, ModalActionContainer, PromptInputText, 
    StyleManagerHOC }
export default StyleManager