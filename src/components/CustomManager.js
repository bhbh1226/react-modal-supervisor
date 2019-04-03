import React, { Component } from 'react'
import styled from 'styled-components'
import { ModalBackground as MB, ModalInner as MI, ModalActionContainer as MAC, PromptInputText as PIT } from './Container'

let ModalBackground = MB
let ModalInner = MI
let ModalActionContainer = MAC
let PromptInputText = PI

/* Constants */
STYLE_BACKGROUND = 200
STYLE_INNER = 201
STYLE_ACTION_CONTAINER = 202
STYLE_INPUT_TEXT = 203

class CustomManager extends Component {
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

export { ModalBackground, ModalInner, ModalActionContainer, PromptInputText }
export default CustomManager