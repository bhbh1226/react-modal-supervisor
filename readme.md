# 	React-Modal-Supervisor

![react-modal-supervisor_version](https://img.shields.io/github/package-json/v/bhbh1226/react-modal-supervisor.svg)

Modal Supervisor Based-on React Context API & JS Array



## Installation

Using npm:

`$ npm install --save-dev react-modal-supervisor`



This packages based on 'React Context API'. So ModalSupervisor.js is Context Provider.

You have to set and initalize Supervising.



## How To Use

----

### Basic Usage

#### Initializing in App.js

```react
// import modules
import ModalSupervisor, { modalRootInit } from 'react-modal-supervisor'

// modal root initializing
modalRootInit()

... // code in component
render() {
	return (
		<div id="app">
			<ModalSupervisor> // provider setting
 				{this.props.children}
 			</ModalSupervisor >
 		</div>
	)
}
```



#### in Page

And, you can import MODAL_TYPE and modal context consumer HOC

```react
// import modules
import {
    ModalSupervisorHOC,
    MODAL_TYPE_ALERT
    } from 'react-modal-supervisor';


class Mainpage extends Component {
    ... //code what you wants
    render() {
        return (
            {// when click buttons}
            <button onClick={() => {
				// you can use *this.props.actions.createModal function to create modal*
                // provider's createModal with MODAL_TYPE_ALERT
                this.props.actions.createModal(MODAL_TYPE_ALERT, "Hello, World!")}}>Open Modal</button>
        )
    }
}

export default ModalSupervisorHOC(MainPage)
```

----

### with result

#### with callback function

```react
this.props.actions.createModal(MODAL_TYPE_CONFIRM, "confirm", () => {console.log("onConfirm")}, () => {console.log("onDismiss")})
this.props.actions.createModal(MODAL_TYPE_PROMPT, "prompt", (param) => {console.log(param + "is typed")}, () => {console.log("onDismiss")})
```

#### with promise

```react
this.props.actions.createModal(MODAL_TYPE_CONFIRM, "hello")
    .then(result => {
        if (result === true) {
        	console.log("onConfirm")
        } else {
            console.log("onDismiss")
        }
})

this.props.actions.createModal(MODAL_TYPE_PROMPT, "prompt")
    .then(result => {
        if (result !== false) {
        	console.log(result)
        } else {
            console.log("onDismiss")
        }
})
```

#### with async/await

```react
// you can wait until value will return
const confirm_result = await this.props.actions.createModal(MODAL_TYPE_CONFIRM, "confirm")
const prompt_result = await this.props.actions.createModal(MODAL_TYPE_PROMPT, "prompt") 

// you can also use alert with await for waiting result
const alert_result = await this.props.actions.createModal(MODAL_TYPE_ALERT, "alert")
```



### with custom-style modal

#### in NewCustomStyle.js

```react
// with new file named 'NewCustomStyle.js'
import { StyleManager } from 'react-modal-supervisor';
const { STYLE_BACKGROUND, styleOverride } = StyleManager
// you should import StyleManager from react-modal-supervisor
// and you will destructuring STYLE_BACKGROUND enum and styleOverride function.

const CustomBackground = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    background-color: rgba(12, 243, 123, 0.4);
    position: fixed;

    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;

    z-index: 9000;
`

const NewCustomStyle = () => {
    styleOverride(STYLE_BACKGROUND, CustomBackground)
})

export default NewCustomStyle
```

!!! you **must** use styled-component for new Style.



#### in App.js

```react
...
import NewCustomStyle from './NewCustomStyle';

NewCustomStyle()
...

render() {
    return (
    	<div id="app">
            <ModalSupervisor>
                {this.props.children}
            </ModalSupervisor>
        </div>
    )
}
```

---

### with custom-modal

#### in NewCustomModal.js

```react
// your modal will receive props like (children, onClose, onConfirm, onDismiss)
const NewCustomModal = ({children, onClose}) => {
    return (
        <div>
            {children}
            <h1>really?</h1>
            <button onClick={onClose}></button>
        </div>
    )
}

export default NewCustomModal
```

you can use **props** for close modal, confirm modal, dismiss modal.

if you call props.onDismiss(), modal will return false and closed.

if you call props.onConfirm("wow"), modal will return "wow" and closed.

### in App.js

```react
addCustomModal("MODAL_TYPE_NEW", NewCustomModal)

```

#### and Use in MainPage

```react
this.props.actions.createModal("MODAL_TYPE_WOW", "안녕")
```



## Documents

### Modal Context Provider's Actions List

| Name           | Params                       | descriptions                         |
| -------------- | ---------------------------- | ------------------------------------ |
| createModal    | type, text, confirm, dismiss | create Modal by params               |
| addCustomModal | type, component              | create Custom Modal                  |
| popModal       |                              | pop pre-floating modal.              |
| closeModalIdx  | idx                          | close modal by idx.                  |
| setModalResult | idx, result                  | set result and close modal which idx |



### MODAL_TYPES

| type name          | required types                                               | Examples                                                     | Returns                        |
| :----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| MODAL_TYPE_ALERT   | type(String), text(String)                                   | createModal (MODAL_TYPE_ALERT , "Hello" )                    | true                           |
| MODAL_TYPE_CONFIRM | type(String), text(String), confirm(Callback), dismiss(Callback) | createModal (MODAL_TYPE_CONFIRM , "What do you want")        | (confirm)true, (dismiss)false  |
| MODAL_TYPE_LOADING | type(String)                                                 | createModal (MODAL_TYPE_LOADING )  Please use this .props .actions .popModal () to Close your modal. |                                |
| MODAL_TYPE_PROMPT  | type(String), text(String), confirm(param) (Callback), dismiss(Callback) | createModal(MODAL_TYPE_PROMPT, "prompt")                     | (confirm)value, (dismiss)false |

### CUSTOM_STYLE_TYPES

| type name                   | descriptions                         | when            |
| --------------------------- | ------------------------------------ | --------------- |
| STYLE_BACKGROUND            | background blackout                  | ALL             |
| STYLE_INNER                 | modal inner white thing (relative)   | ALL             |
| STYLE_ACTION_CONTAINER      | buttons container                    | CONFIRM, PROMPT |
| STYLE_INPUT_TEXT            | PromptModal's input                  | PROMPT          |
| STYLE_CONFIRM_BUTTON        | Confirm Button                       | CONFIRM, PROMPT |
| STYLE_DISMISS_BUTTON        | Dismiss Button                       | CONFIRM, PROMPT |
| STYLE_CLOSE_BUTTON_ABSOLUTE | AlertModal's Close Button (absolute) | ALERT           |
| STYLE_SPINNER               | LoadingModal's Spinner (relative)    | LOADING         |



## Issues

Please check our [issues in github](https://github.com/bhbh1226/react-modal-supervisor/issues)



## Made by

[bhbh1226](https://github.com/bhbh1226/)(박평진)

![디미고 16기 WP](https://img.shields.io/badge/dimigo-16-brightgreen.svg)