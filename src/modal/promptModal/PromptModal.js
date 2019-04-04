import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { 
    ModalInner, ModalActionContainer,
    ConfirmButton, DismissButton, PromptInputText, ModalBackground
} from '../../components/StyleManager';

class PromptModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    render() {
        return (
            <ModalBackground>
                <ModalInner>
                    {this.props.children}
                    <PromptInputText type="text" value={this.state.inputValue} onChange={(e) => {this.setState({inputValue: e.target.value})}}/>
                    <ModalActionContainer>
                        <ConfirmButton onClick={() => {this.props.onConfirm(this.state.inputValue)}}>확인</ConfirmButton>
                        <DismissButton onClick={() => {this.props.onDismiss(this.state.inputValue)}}>취소</DismissButton>
                    </ModalActionContainer>
                </ModalInner>
            </ModalBackground>
        )
    }
}

PromptModal.propTypes = {
    onPrompt: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default PromptModal