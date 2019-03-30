import React, { Component, createContext } from 'react';

import Modal from './modal/Modal';
import AlertModal from './modal/alertModal/AlertModal';
import ConfirmModal from './modal/confirmModal/ConfirmModal';
import LoadingModal from './modal/loadingModal/LoadingModal';

const Context = createContext();
const { Provider, Consumer: PageContextConsumer } = Context; 

/* CONSTANTS */

/* REQUIRED: type, text */
const MODAL_TYPE_ALERT = 101
/* REQUIRED: type, text, onConfirm, onDismiss */
const MODAL_TYPE_CONFIRM = 102
/* REQUIRED: type */
const MODAL_TYPE_LOADING = 103

/* INITALIZE */

const modalRootInit = () => {
    const ModalRoot = document.createElement('div')
    ModalRoot.id = "modal-root"
    document.querySelector('body').appendChild(ModalRoot)
}

class ModalManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modals: []
        }
    }

    actions = {
        popModal: () => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [...prevState.modals.pop()] 
                }
            })
        },
        closeModalIdx: (idx) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: prevState.modals.filter((item, i) => idx !== i) 
                }
            })
        },
        createModal: (type, text, confirm, dismiss) => {
            const modal = { type, text, confirm, dismiss }

            this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [...prevState.modals, modal]
                }
            })
        },
        addModal: (modal) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [...prevState.modals, modal]
                }
            })
        }
    }

    render() {
        const { state, actions } = this;
        const value = { state, actions };

        return (
            <div id="modal-manager">
                <Provider value={value}>
                    {this.props.children}
                    {
                        this.state.modals.map((modal_info, idx) => {
                            switch(modal_info.type) {
                                case MODAL_TYPE_ALERT:
                                    return (
                                        <AlertModal key={idx} onClose={() => {this.actions.closeModalIdx.bind(this)(idx)}}>
                                            <h1>{modal_info.text}</h1>
                                        </AlertModal>
                                    )

                                case MODAL_TYPE_CONFIRM:
                                    return (
                                        <ConfirmModal key={idx} onConfirm={() => {modal_info.confirm(); this.actions.closeModalIdx.bind(this)(idx)}} onDismiss={() => {modal_info.dismiss(); this.actions.closeModalIdx.bind(this)(idx)}} >
                                            <h1>{modal_info.text}</h1>
                                        </ConfirmModal>
                                    )
                                
                                case MODAL_TYPE_LOADING:
                                    return (
                                        <LoadingModal key={idx}/>
                                    )
                            }
                        })
                    }
                </Provider>
            </div>
        )
    }
}

let ModalManagerHOC = (WrappedComponent) => (props) => {
    return (
        <PageContextConsumer>
            {
                ({ state, actions }) => (
                    <WrappedComponent
                        state={state}
                        actions={actions}
                        {...props}
                    />
                )
            }
        </PageContextConsumer>
    )
}

export { 
    MODAL_TYPE_ALERT, MODAL_TYPE_CONFIRM, MODAL_TYPE_LOADING,
    ModalManagerHOC,
    modalRootInit };
export default ModalManager;