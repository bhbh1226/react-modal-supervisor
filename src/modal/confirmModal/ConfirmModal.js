import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { ConfirmButton, DismissButton } from '../../components/Button';
import { ModalInner, ModalActionContainer } from '../../components/StyleManager';

class ConfirmModal extends Component {
    render() {
        return (
            <Modal>
                <ModalInner>
                    {this.props.children}
                    <ModalActionContainer>
                        <ConfirmButton onClick={this.props.onConfirm}>확인</ConfirmButton>
                        <DismissButton onClick={this.props.onDismiss}>취소</DismissButton>
                    </ModalActionContainer>
                </ModalInner>
            </Modal>
        )
    }
}

ConfirmModal.propTypes = {
    onConfirm: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default ConfirmModal