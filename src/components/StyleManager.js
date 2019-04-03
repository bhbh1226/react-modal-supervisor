import React, { Component } from 'react'
import styled from 'styled-components'
import { ConfirmButton as CBTN, DismissButton as DBTN, CloseButtonAbsolute as CBTNA } from './Button'
import { ModalBackground as MB, ModalInner as MI, ModalActionContainer as MAC, PromptInputText as PIT } from './Container'

let ModalBackground = MB
let ModalInner = MI
let ModalActionContainer = MAC
let PromptInputText = PIT
// let Button = BTN
let ConfirmButton = CBTN
let DismissButton = DBTN
let CloseButtonAbsolute = CBTNA

/* Constants */
const STYLE_BACKGROUND = 200
const STYLE_INNER = 201
const STYLE_ACTION_CONTAINER = 202
const STYLE_INPUT_TEXT = 203
const STYLE_CONFIRM_BUTTON = 204
const STYLE_DISMISS_BUTTON = 205
const STYLE_CLOSE_BUTTON_ABSOLUTE = 206

function styleOverride(style, component) {
    switch(style) {
        case STYLE_BACKGROUND:
            ModalBackground = component
            break;
        case STYLE_INNER:
            ModalInner = component
            break;
        case STYLE_ACTION_CONTAINER:
            ModalActionContainer = component
            break;
        case STYLE_INPUT_TEXT:
            PromptInputText = component
            break;
        case STYLE_CONFIRM_BUTTON:
            ConfirmButton = component
            break;
        case STYLE_DISMISS_BUTTON:
            DismissButton = component
            break;
        case STYLE_CLOSE_BUTTON_ABSOLUTE:
            CloseButtonAbsolute = component
            break;
    }
}

const StyleManagerHOC = (WrappedComponent) => (props) => {
    return (
        <WrappedComponent styleOverride={styleOverride} {...props} />
    )
}

export { 
    STYLE_BACKGROUND, STYLE_INNER, STYLE_ACTION_CONTAINER, STYLE_INPUT_TEXT, STYLE_CONFIRM_BUTTON, STYLE_DISMISS_BUTTON, STYLE_CLOSE_BUTTON_ABSOLUTE,
    ModalBackground, ModalInner, ModalActionContainer, PromptInputText, 
    ConfirmButton, DismissButton, CloseButtonAbsolute,
    StyleManagerHOC }
// export default StyleManager