import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader'

import App from "./App";
import MainPage from './containers/MainPage'; // with HOC
import SubPage from './containers/SubPage'; // with useContext

class AppRouter extends React.Component {
    render() {
        return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" component={SubPage}/>
                </Switch>
            </App>
        </Router>
        )
    }
}

export default hot(module)(AppRouter)