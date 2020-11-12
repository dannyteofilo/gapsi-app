import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from 'views/welcome'

class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/welcome" name="Welcome" component={Welcome} />
                    <Redirect from="/" to="/welcome" />
                </Switch>
            </div>
        )
    }
}


export default Layout;