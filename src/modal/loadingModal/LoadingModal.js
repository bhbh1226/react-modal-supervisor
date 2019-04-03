import React, { Component } from 'react'
import Modal from '../Modal';
import LdsSpinner from './LdsSpinner';

class LoadingModal extends Component {
    render() {
        return (
            <Modal>
                <LdsSpinner/>
            </Modal>
        )
    }
}

export default LoadingModal