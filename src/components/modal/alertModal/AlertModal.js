import React, { Component, Fragment } from 'react'
import Modal from '../Modal';
import PropTypes from 'prop-types';
import './AlertModal.css'

class AlertModal extends Component {
    render() {
        return (
            <Modal>
                <div className="alert-modal-background">
                    <div className="alert-modal-inner">
                        <button className="close-button" onClick={this.props.onClose}><i className="fas fa-times"/></button>
                        {this.props.children}
                    </div>
                </div>
            </Modal>
        )
    }
}

AlertModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default AlertModal