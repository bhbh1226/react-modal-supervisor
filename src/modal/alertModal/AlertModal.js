import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { ModalBackground, ModalInner, CloseButton, ModalActionContainer } from '../../components/StyleManager';

class AlertModal extends Component {
    render() {
        return (
            <ModalBackground>
                <ModalInner
                    confirm={this.props.onClose}
                    dismiss={this.props.onClose}>
                    {
                        this.props.text.title && (
                            <h1>{this.props.text.title}</h1>
                        )
                    }
                    {
                        this.props.text.content && (
                            <p>{this.props.text.content}</p>
                        )
                    }
                    <ModalActionContainer>
                        <CloseButton onClick={this.props.onClose}>Close</CloseButton>
                    </ModalActionContainer>
                </ModalInner>
            </ModalBackground>
        )
    }
}

AlertModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default AlertModal