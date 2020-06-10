# 	React-Modal-Supervisor

![react-modal-supervisor_version](https://img.shields.io/npm/v/react-modal-supervisor.svg)![LICENSE](https://img.shields.io/npm/l/react-modal-supervisor.svg)



![Preview Image](https://user-images.githubusercontent.com/27873685/58368580-0f168980-7f2a-11e9-8a78-231dbac0d429.gif)

:gift_heart: ​Modal Supervisor Based-on React Context API & JS Array 

## Demo

[![Edit react-modal-supervisor demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/competent-elgamal-pd6d5?fontsize=14)

or

```bash
$ git clone https://github.com/bhbh1226/react-modal-supervisor.git
$ cd react-modal-supervisor
$ npm install
$ npm run dev-server
```



## Installation

Using npm:

`$ npm install --save-dev react-modal-supervisor`



This packages based on 'React Context API'. So ModalSupervisor.js is Context Provider.

You have to set and initalize Supervising.



## Basic Usage

### Supervisor Setup

#### Initializing in App.js

First, Because ModalSupervisor based on Context API's Provider, It should be placed on root.

```javascript
// App.js
// import modules
import React from 'react'
import ModalSupervisor from 'react-modal-supervisor'
import MainPage from './MainPage.js'


// App components
function App() {
	return (
		<div id='app'>
			<ModalSupervisor>
				<MainPage/>
			</ModalSupervisor>
		</div>
	)
}

export default App
```



----

### Create Modal

#### in HOC

Second, MUST Wrap component by ModalSupervisorHOC to use createModal Function.

third, you can use props.modalActions.createModal function to create Modal

```javascript
// MainPage.js
import React from 'react'
import { ModalSupervisorHOC } from 'react-modal-supervisor'

function MainPage(props) {
	return (
		<div id='main-page'>
			<button onClick={() => {
        		props.modalActions.createModal('MODAL_TYPE_ALERT', {
					title: 'Hello World!', 
					content: 'nothing better'
				})}}/>
		</div>
	)
}

export default ModalSupervisorHOC(MainPage)
```

#### in useContext

after react supports *useContext*, our library can use useContext since 1.5.0

this way is more pretty and more comfortable than using HOC

```javascript
import React, { useContext } from 'react'
import { ModalContext } from 'react-modal-supervisor'

function MainPage(props) {
  const { modalActions } = useContext(ModalContext)
  
  return (
		<div id='main-page'>
			<button onClick={() => {
          modalActions.createModal('MODAL_TYPE_ALERT', {
					title: 'Hello World!', 
					content: 'nothing better'
				})}}/>
		</div>
	)
}

export default MainPage
```

#### with callback function

```javascript
const msg = {
    title: "Hello, World!",
    content: "Hello World1!!!!1!"
}

this.props.modalActions.createModal("MODAL_TYPE_CONFIRM", msg, {}, () => {console.log("onConfirm")}, () => {console.log("onDismiss")})
this.props.modalActions.createModal("MODAL_TYPE_PROMPT", msg, {}, (param) => {console.log(param + "is typed")}, () => {console.log("onDismiss")})
```



#### with promise

```javascript
const msg = {
    title: "Hello, World!",
    content: "Hello World1!!!!1!"
}

this.props.modalActions.createModal("MODAL_TYPE_CONFIRM", msg)
    .then(result => {
        if (result === true) {
        	console.log("onConfirm")
        } else {
            console.log("onDismiss")
        }
})

this.props.modalActions.createModal("MODAL_TYPE_PROMPT", msg)
    .then(result => {
        if (result !== false) {
        	console.log(result)
        } else {
            console.log("onDismiss")
        }
})
```



#### with async/await

```javascript
const msg = {
    title: "Hello, World!",
    content: "Hello World1!!!!1!"
}

// you can wait until value will return
const confirm_result = await this.props.modalActions.createModal("MODAL_TYPE_CONFIRM", msg)
const prompt_result = await this.props.modalActions.createModal("MODAL_TYPE_PROMPT", msg) 

// you can also use alert with await for waiting result
const alert_result = await this.props.modalActions.createModal("MODAL_TYPE_ALERT", msg)
```



----

### Passing Props

#### CreateModal General

```javascript
modalActions.createModal(MODAL_TYPE: String, TEXT_JSON?: Object, PROPS_JSON?: Object, confirmCallback?: function, dismissCallback?: function)
```



#### MODAL_TYPE

| type name          | required types                                               | Examples                                                     | Returns                        |
| :----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| MODAL_TYPE_ALERT   | type(String), text(JSON)                                     | createModal (MODAL_TYPE_ALERT , "Hello" )                    | true                           |
| MODAL_TYPE_CONFIRM | type(String), text(JSON), props(object), confirm(Callback), dismiss(Callback) | createModal (MODAL_TYPE_CONFIRM , "What do you want")        | (confirm)true, (dismiss)false  |
| MODAL_TYPE_LOADING | type(String)                                                 | createModal (MODAL_TYPE_LOADING )  Please use this .props .modalActions .popModal () to Close your modal. |                                |
| MODAL_TYPE_PROMPT  | type(String), text(JSON), props(object), confirm(param) (Callback), dismiss(Callback) | createModal(MODAL_TYPE_PROMPT, "prompt")                     | (confirm)value, (dismiss)false |



#### TEXT_JSON

| name        | type   | descriptions                   |
| ----------- | ------ | ------------------------------ |
| title       | String | Title wrapped by h1 tag        |
| content     | String | inner Content wrapped by p tag |
| placeholder | String | prompt modal's placeholdera    |



#### PROPS_JSON

this props is extra props passed to Modal Component.



## ADVANCE Usage

### standard modal's style override

#### Create NewCustomStyle Component

in NewCustomStyle.js

```javascript
// NewCustomStyle.js
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

!!! you **can** use styled-component for new Style.



#### Apply Custom Style

in App.js

```javascript
//App.js
import NewCustomStyle from './NewCustomStyle';

NewCustomStyle()
```



#### CUSTOM_STYLE_TYPES

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



---

### Add Custom Modal

#### Create CustomModal

in NewCustomModal.js

```javascript
// NewCustomModal.js
// your modal will receive props like (children, onClose, onConfirm, onDismiss)
const NewCustomModal = ({children, onClose}) => {
    return (
        <div
      		style={{
       			position: "fixed",
        		top: 0,
        		left: 0,
        		width: "100%",
        		height: "100vh",
        		backgroundColor: "rgba(0, 0, 0, 0.1)",
        		zIndex: 10000
      		}}
      		onClose={onClose}
    	>
      	<div
      		style={{
          		position: "fixed",
          		top: "50%",
          		left: "50%",
          		transform: "translate(-50%, -50%)",
          		backgroundColor: "white"
        	}}
      	>
        <h1>{text.title} Is Title!</h1>
        <h1>{text.content} Is Content!</h1>
        <h1>really?</h1>
      </div>
    </div>
    )
}

export default NewCustomModal
```

you can use **props** for close modal, confirm modal, dismiss modal.

props text is passed JSON text object.

if you call props.onDismiss(), modal will return false and closed.

if you call props.onConfirm("wow"), modal will return "wow" and closed.



#### Add Custom Modal to Supervisor

```javascript
// App.js
import { addCustomModal } from 'react-modal-supervisor'
import NewCustomModal from './NewCustomModal.js'

addCustomModal("MODAL_TYPE_NEW", NewCustomModal)
```



#### Use in MainPage.js

```javascript
// MainPage.js
this.props.modalActions.createModal("MODAL_TYPE_WOW", "안녕")
```



## Documents

### Modal Context Provider's Actions List

| Name           | Params                              | descriptions                         |
| -------------- | ----------------------------------- | ------------------------------------ |
| createModal    | type, text, props, confirm, dismiss | create Modal by params               |
| addCustomModal | type, component                     | create Custom Modal                  |
| popModal       |                                     | pop pre-floating modal.              |
| closeModalIdx  | idx                                 | close modal by idx.                  |
| setModalResult | idx, result                         | set result and close modal which idx |



### MODAL_TYPES TABLE

| type name          | required types                                               | Examples                                                     | Returns                        |
| :----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| MODAL_TYPE_ALERT   | type(String), text(JSON)                                     | createModal (MODAL_TYPE_ALERT , "Hello" )                    | true                           |
| MODAL_TYPE_CONFIRM | type(String), text(JSON), props(object), confirm(Callback), dismiss(Callback) | createModal (MODAL_TYPE_CONFIRM , "What do you want")        | (confirm)true, (dismiss)false  |
| MODAL_TYPE_LOADING | type(String)                                                 | createModal (MODAL_TYPE_LOADING )  Please use this .props .modalActions .popModal () to Close your modal. |                                |
| MODAL_TYPE_PROMPT  | type(String), text(JSON), props(object), confirm(param) (Callback), dismiss(Callback) | createModal(MODAL_TYPE_PROMPT, "prompt")                     | (confirm)value, (dismiss)false |

### CUSTOM_STYLE_TYPES TABLE

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

### TEXT_JSON type TABLE

| name        | type   | descriptions                   |
| ----------- | ------ | ------------------------------ |
| title       | String | Title wrapped by h1 tag        |
| content     | String | inner Content wrapped by p tag |
| placeholder | String | prompt modal's placeholdera    |



## Issues

Please check our [issues in github](https://github.com/bhbh1226/react-modal-supervisor/issues)



## Made by

[bhbh1226](https://github.com/bhbh1226/)(박평진)![디미고 16기 WP](https://img.shields.io/badge/dimigo-16-brightgreen.svg)