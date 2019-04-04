import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { ModalBackground, ModalInner, CloseButtonAbsolute } from '../../components/StyleManager';

class AlertModal extends Component {
    render() {
        return (
            <ModalBackground>
                <ModalInner>
                    <CloseButtonAbsolute onClick={this.props.onClose}><i className="fas fa-times"/></CloseButtonAbsolute>
                    {this.props.children}
                </ModalInner>
            </ModalBackground>
        )
    }
}

AlertModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default AlertModal