import React, { Component } from 'react'
import Modal from '../Modal';
import styled from 'styled-components'
import LdsSpinner from './LdsSpinner';
import { Background } from '../../components/Container';

const LoadingBackground = styled(Background)``

class LoadingModal extends Component {
    render() {
        return (
            <Modal>
                <LoadingBackground>
                    <LdsSpinner/>
                </LoadingBackground>
            </Modal>
        )
    }
}

export default LoadingModal