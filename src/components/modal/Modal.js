import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import './style/Modal.css'

class Modal extends React.Component {
    render() {
       return ReactDOM.createPortal(
           (
               <div className="modal-background">
                    {/* <div className="modal-body"> */}
                        {this.props.children}
                    {/* </div> */}
               </div>
           ),
           document.getElementById('modal-root')
       )
    }
}

// Modal.PropTypes = {
//     children: PropTypes.element,
// }

export default Modal