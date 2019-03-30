import React, { Component } from 'react'
import './LoadingModal.css'
import Modal from '../Modal';

class LoadingModal extends Component {
    render() {
        return (
            <Modal>
                <div className="loading-background">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </Modal>
        )
    }
}

export default LoadingModal