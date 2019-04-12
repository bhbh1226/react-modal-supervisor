import React, { Component, createContext } from 'react';

import Modal from './modal/Modal';
import AlertModal from './modal/alertModal/AlertModal';
import ConfirmModal from './modal/confirmModal/ConfirmModal';
import LoadingModal from './modal/loadingModal/LoadingModal';
import PromptModal from './modal/promptModal/PromptModal';

import * as StyleManager from './components/StyleManager'

const Context = createContext();
const { Provider, Consumer: PageContextConsumer } = Context; 

/* CONSTANTS */

let MODAL_TYPE = [
    {type: "MODAL_TYPE_ALERT", component: AlertModal},
    {type: "MODAL_TYPE_CONFIRM", component: ConfirmModal},
    {type: "MODAL_TYPE_LOADING", component: LoadingModal},
    {type: "MODAL_TYPE_PROMPT", component: PromptModal},
]

// /* REQUIRED: type, text */
// const MODAL_TYPE_ALERT = 101
// /* REQUIRED: type, text, confirm, dismiss */
// const MODAL_TYPE_CONFIRM = 102
// /* REQUIRED: type */
// const MODAL_TYPE_LOADING = 103
// /* REQUIRED: type, text, confirm(params), dismiss */
// const MODAL_TYPE_PROMPT = 104

/* INITALIZE */

const modalRootInit = () => {
    const ModalRoot = document.createElement('div')
    ModalRoot.id = "modal-root"
    document.querySelector('body').appendChild(ModalRoot)
}

class ModalSupervisor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modals: []
        }
    }

    actions = {
        popModal: async () => {
            // this.setState((prevState) => {
            //     return {
            //         ...prevState,
            //         modals: [...prevState.modals.pop()] 
            //     }
            // })

            let target = this.state.modals[this.state.modals.length-1]
            target.result = true

            await this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [
                        ...prevState.modals.filter((item, i) => (this.state.modals.length-1) !== i),
                        target
                    ]
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
        setModalResult: (idx, result) => {
            let target = this.state.modals[idx]
            target.result = result

            this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [
                        ...prevState.modals.filter((item, i) => idx !== i),
                        target
                    ]
                }
            })
        },
        createModal: async (type, text, confirm=(()=>{}), dismiss=(()=>{})) => {
            const modal = { type, text, confirm, dismiss, result: null }
            const newItemIdx = this.state.modals.length

            await this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [...prevState.modals, modal]
                }
            })

            // if ((type === MODAL_TYPE_CONFIRM) || (type === MODAL_TYPE_PROMPT)) {
            return new Promise((resolve, reject) => {
                try {
                    (function waitForResult() {
                        if (this.state.modals[newItemIdx].result !== null) {
                            resolve(this.state.modals[newItemIdx].result)

                            // close modal
                            this.setState((prevState) => {
                                return {
                                    ...prevState,
                                    modals: prevState.modals.filter((item, i) => newItemIdx !== i) 
                                }
                            })
                            return;
                        }
                        setTimeout(waitForResult.bind(this), 30)
                    }.bind(this))()

                } catch (e) {
                    reject(e)
                    return;
                }
            })
            // }
        },
    }

    render() {
        const { state, actions } = this;
        const value = { state, actions };

        return (
            <div id="modal-supervisor">
                <Provider value={value}>
                    {this.props.children}
                    <Modal>
                        {
                            this.state.modals.map((modal_info, idx) => {
                                switch(modal_info.type) {
                                    case "MODAL_TYPE_ALERT":
                                        return (
                                            <AlertModal key={idx} onClose={() => {this.actions.setModalResult.bind(this)(idx, true)}}>
                                                <h1>{modal_info.text}</h1>
                                            </AlertModal>
                                        )

                                    case "MODAL_TYPE_CONFIRM":
                                        return (
                                            <ConfirmModal key={idx} onConfirm={() => {modal_info.confirm(); this.actions.setModalResult.bind(this)(idx, true)}} onDismiss={() => {modal_info.dismiss(); this.actions.setModalResult.bind(this)(idx, false)}} >
                                                <h1>{modal_info.text}</h1>
                                            </ConfirmModal>
                                        )
                                    
                                    case "MODAL_TYPE_LOADING":
                                        return (
                                            <LoadingModal key={idx}/>
                                        )
                                    
                                    case "MODAL_TYPE_PROMPT":
                                        return (
                                            <PromptModal key={idx} onConfirm={(param) => {modal_info.confirm(param); this.actions.setModalResult.bind(this)(idx, param)}} onDismiss={(param) => {modal_info.dismiss(param); this.actions.setModalResult.bind(this)(idx, false)}} >
                                                <h1>{modal_info.text}</h1>
                                            </PromptModal>
                                        )
                                    default:
                                        for(let modalType of MODAL_TYPE) {
                                            // console.log(modal_info.type)
                                            if (modalType.type === modal_info.type) {
                                                return (
                                                    <modalType.component
                                                        key={idx}
                                                        onConfirm={(param) => {modal_info.confirm(param); this.actions.setModalResult.bind(this)(idx, param)}}
                                                        onClose={() => {this.actions.setModalResult.bind(this)(idx, true)}}
                                                        onDismiss={() => {modal_info.dismiss(); this.actions.setModalResult.bind(this)(idx, false)}}>
                                                        <h1>{modal_info.text}</h1>
                                                    </modalType.component>
                                                )
                                            }
                                        }
                                }
                            })
                        }
                    </Modal>
                </Provider>
            </div>
        )
    }
}

let ModalSupervisorHOC = (WrappedComponent) => (props) => {
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

const addCustomModal = (type, component) => {
    MODAL_TYPE.push({type, component})
} 

export { 
    // MODAL_TYPE_ALERT, MODAL_TYPE_CONFIRM, MODAL_TYPE_LOADING, MODAL_TYPE_PROMPT,
    ModalSupervisorHOC,
    modalRootInit,
    addCustomModal,
    StyleManager };
export default ModalSupervisor;