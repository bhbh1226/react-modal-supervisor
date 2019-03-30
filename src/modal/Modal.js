import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import { flexColumn, FullScreen } from '../components/Container';

// import './style/Modal.css'

const fadeInPage = keyframes`
    from { opacity: 0;}
    to { opacity: 1;}
`

const ModalBackground = styled(FullScreen)`
    ${flexColumn}

    background-color: rgba(0,0,0,0.5);

    justify-content: flex-start;
    align-items: center;

    overflow-y: scroll;

    animation: ${fadeInPage} forwards 300ms;

    box-sizing: border-box;
    
    z-index: 90000;
`

class Modal extends React.Component {
    render() {
       return ReactDOM.createPortal(
           (
               <ModalBackground>
                    {this.props.children}
               </ModalBackground>
           ),
           document.getElementById('modal-root')
       )
    }
}

export default Modal