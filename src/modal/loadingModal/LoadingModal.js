import React, { Component } from 'react'
import Modal from '../Modal';
import { Spinner, ModalBackground } from '../../components/StyleManager';

class LoadingModal extends Component {
    render() {
        return (
            <ModalBackground>
                <Spinner/>
            </ModalBackground>
        )
    }
}

export default LoadingModal