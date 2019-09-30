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
                <ModalInner 
                    confirm={() => {this.props.onConfirm(this.state.inputValue)}} 
                    dismiss={() => {this.props.onDismiss(this.state.inputValue)}} >
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
                    <PromptInputText type="text" list="data-lists" value={this.state.inputValue} placeholder={this.props.text.placeholder || "Please Write Anything"} onChange={(e) => {this.setState({inputValue: e.target.value})}}/>
                    <ModalActionContainer>
                        <DismissButton onClick={() => {this.props.onDismiss(this.state.inputValue)}}>Dismiss</DismissButton>
                        <ConfirmButton onClick={() => {this.props.onConfirm(this.state.inputValue)}}>Confirm</ConfirmButton>
                    </ModalActionContainer>
                    <datalist id="data-lists">
                        { // options로 대체해야함
                            this.props.datalists && this.props.datalists.map(item => {
                                return <option value={item}/>
                            })
                        }
                    </datalist>
                </ModalInner>
            </ModalBackground>
        )
    }
}

PromptModal.propTypes = {
    datalists: PropTypes.arrayOf(PropTypes.string),
    onPrompt: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default PromptModal