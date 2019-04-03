import React, { Component } from 'react'
import Modal from '../Modal';
import { Spinner } from '../../components/StyleManager';

class LoadingModal extends Component {
    render() {
        return (
            <Modal>
                <Spinner/>
            </Modal>
        )
    }
}

export default LoadingModal