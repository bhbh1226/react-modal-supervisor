import React, { Component, Fragment } from 'react'
import Modal from '../Modal';
import PropTypes from 'prop-types';
import './ConfirmModal.css'

class ConfirmModal extends Component {
    render() {
        return (
            <Modal>
                <div className="confirm-modal-background">
                    <div className="confirm-modal-inner">
                        {this.props.children}
                        <div className="modal-action-container">
                            <button className="confirm-button" onClick={this.props.onConfirm}>확인</button>
                            <button className="dismiss-button" onClick={this.props.onDismiss}>취소</button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

ConfirmModal.propTypes = {
    onConfirm: PropTypes.func,
    onDismiss: PropTypes.func,
}

export default ConfirmModal