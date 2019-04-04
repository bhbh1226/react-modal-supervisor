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
                    {this.props.children}
                    <ModalActionContainer>
                        <ConfirmButton onClick={this.props.onConfirm}>확인</ConfirmButton>
                        <DismissButton onClick={this.props.onDismiss}>취소</DismissButton>
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