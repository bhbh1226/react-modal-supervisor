import React, { Component, createContext } from 'react';

import Modal from './modal/Modal';
import AlertModal from './modal/alertModal/AlertModal';
import ConfirmModal from './modal/confirmModal/ConfirmModal';
import LoadingModal from './modal/loadingModal/LoadingModal';
import PromptModal from './modal/promptModal/PromptModal';

import * as StyleManager from './components/StyleManager'

const ModalContext = createContext();
const { Provider, Consumer: PageContextConsumer } = ModalContext; 

/* CONSTANTS */

let MODAL_TYPE = [
    {type: "MODAL_TYPE_ALERT", component: AlertModal},
    {type: "MODAL_TYPE_CONFIRM", component: ConfirmModal},
    {type: "MODAL_TYPE_LOADING", component: LoadingModal},
    {type: "MODAL_TYPE_PROMPT", component: PromptModal},
]

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
            isBusy: false,
            modals: []
        }
    }

    actions = {
        popModal: async () => {
            const targetIdx = this.state.modals.length-1
            let target = this.state.modals[targetIdx]
            let isChanged = false
            this.setState({isBusy: true})
            target.result = true

            this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [
                        ...prevState.modals.filter((item, i) => (targetIdx) !== i),
                        target
                    ]
                }
            }, () => {
                isChanged = this.state.modals
            })

            return new Promise((resolve, reject) => {
                try {
                    /* for await */
                    (function checkForResult() {
                        if (isChanged !== false) {
                            resolve(isChanged)
                        }
                        setTimeout(checkForResult.bind(this), 30)
                    }.bind(this))()
                } catch (e) {
                    reject(e)
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
            this.setState({isBusy: true})
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
        createModal: async (type, text, props, confirm=(()=>{}), dismiss=(()=>{})) => {
            /* wait for busy */
            await new Promise((resolve, reject) => {
                try {
                    (function waitForBusy() {
                        if (this.state.isBusy !== true) {
                            resolve(this.state.isBusy)

                            return;
                        }
                        setTimeout(waitForBusy.bind(this), 30)
                    }.bind(this))()
                } catch (e) {
                    reject(e)
                }
            })

            const newItemIdx = this.state.modals.length
            const modal = { type, text, confirm, dismiss, result: null, props }

            /* validation check */
            if (!(MODAL_TYPE.map(item => item.type).includes(type))) {
                return new Promise((resolve, reject) => {
                    reject({ status: 'fail', type: 'ModalTypeInvalidError', message: 'MOTAL_TYPE is invalid'})
                })
            }

            /* modal create */
            await this.setState((prevState) => {
                return {
                    ...prevState,
                    modals: [...prevState.modals, modal]
                }
            })

            return new Promise((resolve, reject) => {
                try {
                    (function waitForResult() {
                        if (this.state.modals[newItemIdx] === undefined) {
                            throw 'modal cannot find newItemIdx error idx : ' + newItemIdx;
                        }
                        if (this.state.modals[newItemIdx].result !== null && this.state.modals[newItemIdx].result !== undefined) {
                            resolve(this.state.modals[newItemIdx].result)

                            // close modal
                            this.setState((prevState) => {
                                return {
                                    ...prevState,
                                    modals: prevState.modals.filter((item, i) => newItemIdx !== i) 
                                }
                            }, () => {this.setState({isBusy: false})})
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
        const value = { modalState: state, modalActions: actions };

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
                                            <AlertModal key={idx} {...modal_info.props} onClose={() => {this.actions.setModalResult.bind(this)(idx, true)}} text={modal_info.text}/>
                                        )

                                    case "MODAL_TYPE_CONFIRM":
                                        return (
                                            <ConfirmModal key={idx} {...modal_info.props} onConfirm={() => {modal_info.confirm(); this.actions.setModalResult.bind(this)(idx, true)}} onDismiss={() => {modal_info.dismiss(); this.actions.setModalResult.bind(this)(idx, false)}} text={modal_info.text}/>
                                        )
                                    
                                    case "MODAL_TYPE_LOADING":
                                        return (
                                            <LoadingModal key={idx} {...modal_info.props}/>
                                        )
                                    
                                    case "MODAL_TYPE_PROMPT":
                                        return (
                                            <PromptModal key={idx} {...modal_info.props} onConfirm={(param) => {modal_info.confirm(param); this.actions.setModalResult.bind(this)(idx, param)}} onDismiss={(param) => {modal_info.dismiss(param); this.actions.setModalResult.bind(this)(idx, false)}} text={modal_info.text}/>
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
                                                        onDismiss={() => {modal_info.dismiss(); this.actions.setModalResult.bind(this)(idx, false)}}
                                                        text={modal_info.text}
                                                        {...modal_info.props}
                                                        />
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
                ({ modalState, modalActions }) => (
                    <WrappedComponent
                        modalState={modalState}
                        modalActions={modalActions}
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
    ModalContext,
    addCustomModal,
    StyleManager
};
export default ModalSupervisor;