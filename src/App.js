import React from 'react'
import './normalize.css'
// import Header from './components/Header'

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                {this.props.children}
            </div>
        )
    }
}

export default App