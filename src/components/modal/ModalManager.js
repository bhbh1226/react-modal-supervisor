import React, { Component } from 'react';
import Modal from './Modal';
import AlertModal from './alertModal/AlertModal';
import ConfirmModal from './confirmModal/ConfirmModal';
import LoadingModal from './loadingModal/LoadingModal';

/* CONSTANTS */

/* REQUIRED: type, text */
const MODAL_TYPE_ALERT = 101
/* REQUIRED: type, text */
const MODAL_TYPE_CONFIRM = 102
/* REQUIRED: type */
const MODAL_TYPE_LOADING = 103

class ModalManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modals: [
                { type: MODAL_TYPE_ALERT, text: "위험합니다." },
                { type: MODAL_TYPE_CONFIRM, text: "집에 가시겠습니까?" },
                { type: MODAL_TYPE_LOADING }
            ]
        }
    }

    closeModalIdx(idx) {
        this.setState(
            (prevState) => {
                return {
                    ...prevState,
                    modals: prevState.modals.filter((item, i) => idx !== i) 
                }
            }
        )
    }

    render() {
        return (
            <div id="modal-manager">
                {
                    this.state.modals.map((modal_info, idx) => {
                        switch(modal_info.type) {
                            case MODAL_TYPE_ALERT:
                                return (
                                    <AlertModal key={idx} onClose={() => {this.closeModalIdx.bind(this)(idx)}}>
                                        <h1>{modal_info.text}</h1>
                                    </AlertModal>
                                )

                            case MODAL_TYPE_CONFIRM:
                                return (
                                    <ConfirmModal onConfirm={() => {this.closeModalIdx.bind(this)(idx)}} onDismiss={() => {this.closeModalIdx.bind(this)(idx)}} >
                                        <h1>{modal_info.text}</h1>
                                    </ConfirmModal>
                                )
                            
                            case MODAL_TYPE_LOADING:
                                return (
                                    <LoadingModal/>
                                )
                        }
                    })
                }
            </div>
        )
    }
}



const modalHOC = (url) => (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }
}

export { MODAL_TYPE_ALERT, MODAL_TYPE_CONFIRM, MODAL_TYPE_LOADING };
export default ModalManager;