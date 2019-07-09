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

    background-color: rgba(0,0,0,0.1);

    overflow-y: auto;

    animation: ${fadeInPage} forwards 300ms;

    box-sizing: border-box;
    
    z-index: 90000;
`

const ModalInner = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');

    ${flexColumn}
    ${flexCenter}

    font-family: 'Noto Sans KR', sans-serif;

    position: relative;

    min-width: 22em;
    max-width: 28em;
    min-height: 10em;

    padding: 3em;
    padding-bottom: 4em;

    border-radius: 5px;
    background-color: white;

    box-shadow: 15px 19px 32px -18px rgba(21,19,19,.07);
`

const ModalActionContainer = styled.div`
    position: absolute;
    
    bottom: 20px;
    right: 20px;

    ${flexRow}
    ${flexCenter}

    box-sizing: border-box;
`

const PromptInputText = styled.input.attrs(props => {
    return {
        autoFocus: true,
        onKeyPress: (e) => {
            if (e.key === 'Enter' && props.confirm) {
                props.confirm()
            }
        }
    }
})`
    width: 100%;

    margin: 1em 0;
    padding: 0.5em;
    padding-top: 0.6em;

    border: none;
    border-bottom: 3px solid black;

    /* background-color: rgba(0, 0, 0, 0.01); */

    outline: none;

    /* &::placeholder {
        color: white;
    } */
`

export { 
    ModalBackground, ModalInner, ModalActionContainer, PromptInputText,
    Background, FullScreen,
    flexBox, flexCenter, flexColumn, flexRow
}