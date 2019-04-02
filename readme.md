# 	React-Modal-Supervisor

![react-modal-supervisor_version](https://img.shields.io/github/package-json/v/bhbh1226/react-modal-supervisor.svg)

Modal Supervisor Based-on React Context API & JS Array



## Installation

Using npm:

`$ npm install --save-dev react-modal-supervisor`



This packages based on 'React Context API'. So ModalSupervisor.js is Context Provider.

You have to set and initalize Supervising.



## How To Use

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



## Documents

### Modal Context Provider's Actions List

| Name          | Params                       | descriptions            |
| ------------- | ---------------------------- | ----------------------- |
| createModal   | type, text, confirm, dismiss | create Modal by params  |
| addModal      | modal_json                   | create Modal by json    |
| popModal      |                              | pop pre-floating modal. |
| closeModalIdx | idx                          | close modal by idx.     |



### MODAL_TYPES

| type name          | required types                                               | Examples                                                     | Returns                        |
| :----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| MODAL_TYPE_ALERT   | type(String), text(String)                                   | createModal (MODAL_TYPE_ALERT , "Hello" )                    | true                           |
| MODAL_TYPE_CONFIRM | type(String), text(String), confirm(Callback), dismiss(Callback) | createModal (MODAL_TYPE_CONFIRM , "What do you want")        | (confirm)true, (dismiss)false  |
| MODAL_TYPE_LOADING | type(String)                                                 | createModal (MODAL_TYPE_LOADING )  Please use this .props .actions .popModal () to Close your modal. |                                |
| MODAL_TYPE_PROMPT  | type(String), text(String), confirm(param) (Callback), dismiss(Callback) | createModal(MODAL_TYPE_PROMPT, "prompt")                     | (confirm)value, (dismiss)false |



## Issues

Please check our [issues in github](https://github.com/bhbh1226/react-modal-supervisor/issues)



## Made by

[bhbh1226](https://github.com/bhbh1226/)(박평진)

![디미고 16기 WP](https://img.shields.io/badge/dimigo-16-brightgreen.svg)