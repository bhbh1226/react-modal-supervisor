import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { 
    ModalInner, ModalActionContainer,
    ConfirmButton, DismissButton, ModalBackground
} from '../../components/StyleManager';

class ConfirmModal extends Component {
    render() {
        return (
            <ModalBackground>
                <ModalInner>
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
                        <DismissButton onClick={this.props.onDismiss}>Dismiss</DismissButton>
                        <ConfirmButton onClick={this.props.onConfirm}>Confirm</ConfirmButton>
                    </ModalActionContainer>
                </ModalInner>
            </ModalBackground>
        )
    }
}

ConfirmModal.propTypes = {
    onConfirm: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default ConfirmModal