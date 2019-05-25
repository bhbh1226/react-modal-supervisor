import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 0.6em 1em;
    border: none;
    border-radius: 2px;
    background-color: rgba(174, 174, 174, 0.65);
    color: white;

    outline: none;

    transition: 100ms;

    cursor: pointer;

    &::-moz-focus-inner { 
        border: 0;
        outline: 0;
    }

    &:-moz-focusring {
        border: 0;
        outline: 0;
    }

    &:hover {
        background-color: rgba(174, 174, 174, 0.7);
    }

    &:active {
        background-color: rgba(174, 174, 174, 1);
    }
`

const ConfirmButton = styled(Button)`
    background-color: rgba(7, 194, 100, 0.65);

    &:hover {
        background-color: rgba(7, 194, 100, 0.7);
    }

    &:active {
        background-color: rgba(7, 194, 100, 1);
    }
`

const DismissButton = styled(Button)`
    color: rgba(207, 68, 13, 0.65);
    background-color: rgba(0, 0, 0, 0);
    
    
    &:hover {
        color: rgba(207, 68, 13, 0.7);
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:active {
        color: rgba(207, 68, 13, 1);
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const CloseButton = styled(Button)`
    min-width: 24px;
    min-height: 24px;

    background-color: rgba(200, 15, 15, .65);
    color: white;

    outline: none;

    transition: 100ms;

    &:hover {
        background-color: rgba(200, 15, 15, .7);
    }

    &:active {
        margin-top: 0;
        /* margin-bottom: 3px; */
        background-color: rgba(200, 15, 15, 1);
        border-bottom: 0px solid rgba(200, 15, 15, .9);
    }
`

// const CloseButtonAbsolute = styled(CloseButton)`
//     position: absolute;
            
//     bottom: 10px;
//     right: 10px;

//     color: white;
// `

export { ConfirmButton, DismissButton, CloseButton }
export default Button