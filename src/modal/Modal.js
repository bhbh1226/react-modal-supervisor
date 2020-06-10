import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {
    render() {
        return (
            <div id="modal-root">
                {this.props.children}
            </div>
        )
    }
}

export default Modal