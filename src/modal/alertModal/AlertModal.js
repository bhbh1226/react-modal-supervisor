import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { ModalInner, CloseButtonAbsolute } from '../../components/StyleManager';

class AlertModal extends Component {
    render() {
        return (
            <Modal>
                <ModalInner>
                    <CloseButtonAbsolute onClick={this.props.onClose}><i className="fas fa-times"/></CloseButtonAbsolute>
                    {this.props.children}
                </ModalInner>
            </Modal>
        )
    }
}

AlertModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default AlertModal