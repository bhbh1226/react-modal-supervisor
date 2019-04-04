import React, { Fragment } from 'react'
import ModalSupervisor, { modalRootInit, addCustomModal } from '../src';

import NewCustomStyle from './NewCustomStyle';
import './normalize.css'
import AlertModal from '../src/modal/alertModal/AlertModal';

const NewCustomModal = ({children, onClose}) => {
    return (
        <AlertModal onClose={onClose}>
            {children}
            <h1>really?</h1>
        </AlertModal>
    )
}

modalRootInit()
// NewCustomStyle()
addCustomModal("MODAL_TYPE_WOW", NewCustomModal)

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <ModalSupervisor>
                    {this.props.children}
                </ModalSupervisor>
            </div>
        )
    }
}

export default App