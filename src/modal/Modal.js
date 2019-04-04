import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {
    render() {
       return ReactDOM.createPortal(
           (
               <Fragment>
                    {this.props.children}
                </Fragment>
           ),
           document.getElementById('modal-root')
       )
    }
}

export default Modal