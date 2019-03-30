import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    min-width: 40%;
    min-height: 3em;

    margin: 0 1em;
    
    border: none;
    border-radius: 5px;
    border-bottom: 3px solid rgba(174, 174, 174, 0.9);
    background-color: rgba(174, 174, 174, 0.65);
    color: white;

    outline: none;

    transition: 100ms;

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
        margin-top: 3px;
        background-color: rgba(174, 174, 174, 1);
        border-bottom: 0px solid rgba(174, 174, 174, 0.9);
    }
`

const ConfirmButton = styled(Button)`
    border-bottom: 3px solid rgba(7, 194, 100, 0.9);
    background-color: rgba(7, 194, 100, 0.65);

    &:hover {
        background-color: rgba(7, 194, 100, 0.7);
    }

    &:active {
        margin-top: 3px;
        background-color: rgba(7, 194, 100, 1);
        border-bottom: 0px solid rgba(7, 194, 100, 0.9);
    }
`

const DismissButton = styled(Button)`
    border-bottom: 3px solid rgba(207, 68, 13, 0.9);
    background-color: rgba(207, 68, 13, 0.65);
    
    &:hover {
        background-color: rgba(207, 68, 13, 0.7);
    }

    &:active {
        margin-top: 3px;
        background-color: rgba(207, 68, 13, 1);
        border-bottom: 0px solid rgba(207, 68, 13, 0.9);
    }
`

const CloseButton = styled(Button)`
    min-width: 24px;
    min-height: 24px;

    border: none;
    border-radius: 5px;
    border-bottom: 3px solid rgba(200, 15, 15, .9);
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

const CloseButtonAbsolute = styled(CloseButton)`
    position: absolute;
            
    top: 10px;
    right: 10px;
`

export { ConfirmButton, DismissButton, CloseButton, CloseButtonAbsolute }
export default Button