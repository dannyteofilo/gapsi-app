import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from 'views/welcome';
import Prodcuts from 'views/products';

class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/welcome" name="Welcome" component={Welcome} />
                    <Route path="/products" name="Products" component={Prodcuts} />
                    <Redirect from="/" to="/welcome" />
                </Switch>
            </div>
        )
    }
}


export default Layout;