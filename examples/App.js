import React, { Fragment } from 'react'
import ModalSupervisor, { addCustomModal } from '../src';

import NewCustomStyle from './NewCustomStyle';
import './normalize.css'
import AlertModal from '../src/modal/alertModal/AlertModal';

const NewCustomModal = ({text, onClose}) => {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.1)', zIndex: 10000}} onClose={onClose}>
            <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white'}} >
                <h1>{text.title} Is Title!</h1>
                <h1>{text.content} Is Content!</h1>
                <h1>really?</h1>
            </div>
        </div>
    )
}
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