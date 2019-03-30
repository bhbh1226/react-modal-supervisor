import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal';
import { ConfirmButton, DismissButton } from '../../components/Button';
import { Background, flexColumn, flexCenter, flexRow } from '../../components/Container';


const ConfirmModalBackground = styled(Background)``

const ConfirmModalInner = styled.div`
    ${flexColumn}
    ${flexCenter}

    position: relative;

    min-width: 30em;
    min-height: 10em;

    padding: 3em;

    border-radius: 5px;
    background-color: white;

    input {
        margin: 3em 0;

        width: 100%;

        outline: none;

        &[type="text"], &[type="password"] {
            padding: 0.5em;

            border: none;
            border-bottom: 2px solid rgba(#FF9C00, 0.7);
        }
    }
`

const ModalActionContainer = styled.div`
    ${flexRow}
    ${flexCenter}

    box-sizing: border-box;
`

class ConfirmModal extends Component {
    render() {
        return (
            <Modal>
                <ConfirmModalBackground>
                    <ConfirmModalInner>
                        {this.props.children}
                        <ModalActionContainer>
                            <ConfirmButton onClick={this.props.onConfirm}>확인</ConfirmButton>
                            <DismissButton onClick={this.props.onDismiss}>취소</DismissButton>
                        </ModalActionContainer>
                    </ConfirmModalInner>
                </ConfirmModalBackground>
            </Modal>
        )
    }
}

ConfirmModal.propTypes = {
    onConfirm: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default ConfirmModal