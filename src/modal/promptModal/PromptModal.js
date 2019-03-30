import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal';
import { ConfirmButton, DismissButton } from '../../components/Button';
import { Background, flexColumn, flexCenter, flexRow } from '../../components/Container';

const PromptModalBackground = styled(Background)``

const PromptModalInner = styled.div`
    ${flexColumn}
    ${flexCenter}

    position: relative;

    min-width: 30em;
    min-height: 10em;

    padding: 3em;

    border-radius: 5px;
    background-color: white;
`

const PromptInputText = styled.input`
    width: 100%;

    margin: 3em 0;
    padding: 0.5em;
    padding-top: 0.6em;

    border: none;
    border-bottom: 2px solid rgba(255, 156, 0, 0.7);
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;

    background-color: rgba(0, 0, 0, 0.1);

    outline: none;
`

const ModalActionContainer = styled.div`
    ${flexRow}
    ${flexCenter}

    box-sizing: border-box;
`

class PromptModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    render() {
        return (
            <Modal>
                <PromptModalBackground>
                    <PromptModalInner>
                        {this.props.children}
                        <PromptInputText type="text" value={this.state.inputValue} onChange={(e) => {this.setState({inputValue: e.target.value})}}/>
                        <ModalActionContainer>
                            <ConfirmButton onClick={() => {this.props.onConfirm(this.state.inputValue)}}>확인</ConfirmButton>
                            <DismissButton onClick={() => {this.props.onDismiss(this.state.inputValue)}}>취소</DismissButton>
                        </ModalActionContainer>
                    </PromptModalInner>
                </PromptModalBackground>
            </Modal>
        )
    }
}

PromptModal.propTypes = {
    onPrompt: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default PromptModal