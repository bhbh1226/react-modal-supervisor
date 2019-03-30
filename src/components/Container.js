import React from 'react'
import styled, { css } from 'styled-components'

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
/* 
    min-width: 100%;
    min-height: 100%; */

    width: 100%;
    height: 100%;
`

export { 
    Background, FullScreen,
    flexBox, flexCenter, flexColumn, flexRow
}