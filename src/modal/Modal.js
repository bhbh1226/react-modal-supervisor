import React from 'react'
import ReactDOM from 'react-dom'
import { ModalBackground } from '../components/Container';

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