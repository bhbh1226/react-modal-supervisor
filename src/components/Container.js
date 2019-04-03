import React from 'react'
import styled, { css, keyframes } from 'styled-components'

/* base components */

const flexBox = css`
    display: flex;
`
const flexCenter = css`
    ${flexBox}

    justify-content: center;
    align-items: center;
`

const flexColumn = css`
    ${flexBox}
    
    flex-direction: column;
`

const flexRow = css`
    ${flexBox}
    
    flex-direction: row;
`

const FullScreen = styled.div`
    position: fixed;

    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;
`

const Background = styled.div`
    ${flexColumn}
    ${flexCenter}

    width: 100%;
    height: 100%;
`

const fadeInPage = keyframes`
    from { opacity: 0;}
    to { opacity: 1;}
`

/* modal components */

const ModalBackground = styled(FullScreen)`
    ${flexColumn}
    ${flexCenter}

    background-color: rgba(0,0,0,0.5);

    overflow-y: scroll;

    animation: ${fadeInPage} forwards 300ms;

    box-sizing: border-box;
    
    z-index: 90000;
`

const ModalInner = styled.div`
    ${flexColumn}
    ${flexCenter}

    position: relative;

    min-width: 30em;
    min-height: 10em;

    padding: 3em;

    border-radius: 5px;
    background-color: white;
`

const ModalActionContainer = styled.div`
    ${flexRow}
    ${flexCenter}

    box-sizing: border-box;
`

const PromptInputText = styled.input`
    width: 100%;

    margin: 3em 0;
    padding: 0.5em;
    padding-top: 0.6em;

    border: none;
    border-bottom: 2px solid rgba(255, 156, 0, 0.7);
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;

    background-color: rgba(0, 0, 0, 0.1);

    outline: none;
`

export { 
    ModalBackground, ModalInner, ModalActionContainer, PromptInputText,
    Background, FullScreen,
    flexBox, flexCenter, flexColumn, flexRow
}