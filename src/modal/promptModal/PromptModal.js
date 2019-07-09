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
                    <PromptInputText type="text" value={this.state.inputValue} placeholder={this.props.text.placeholder || "Please Write Anything"} confirm={() => {this.props.onConfirm(this.state.inputValue)}} onChange={(e) => {this.setState({inputValue: e.target.value})}}/>
                    <ModalActionContainer>
                        <DismissButton onClick={() => {this.props.onDismiss(this.state.inputValue)}}>Dismiss</DismissButton>
                        <ConfirmButton onClick={() => {this.props.onConfirm(this.state.inputValue)}}>Confirm</ConfirmButton>
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