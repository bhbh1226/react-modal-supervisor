import React, { Component, Fragment } from 'react'
import Modal from '../Modal';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Background, flexRow, flexColumn } from '../../Container';
import { CloseButtonAbsolute } from '../../Button';

const AlertModalBackground = styled(Background)``
const AlertModalInner = styled.div`
    ${flexRow}
    ${flexColumn}

    position: relative;

    min-width: 30em;
    min-height: 10em;

    padding: 3em;

    border-radius: 5px;
    background-color: white;
`

class AlertModal extends Component {
    render() {
        return (
            <Modal>
                <AlertModalBackground>
                    <AlertModalInner>
                        <CloseButtonAbsolute onClick={this.props.onClose}><i className="fas fa-times"/></CloseButtonAbsolute>
                        {this.props.children}
                    </AlertModalInner>
                </AlertModalBackground>
            </Modal>
        )
    }
}

AlertModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default AlertModal