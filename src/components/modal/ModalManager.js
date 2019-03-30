import React, { Component } from 'react';
import Modal from './Modal';
import AlertModal from './alertModal/AlertModal';

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
            modals = [
                { type: MODAL_TYPE_ALERT, text: "위험합니다." },
                { type: MODAL_TYPE_CONFIRM, text: "집에 가시겠습니까?" },
                // { type: MODAL_TYPE_LOADING }
            ]
        }
    }  

    render() {
        return (
            <div id="modal-manager">
                {
                    this.state.modals.map((modal_info) => {
                        <div>
                            <h1>{modal_info.type}</h1>
                            <h1>{modal_info.text}</h1>
                        </div>
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