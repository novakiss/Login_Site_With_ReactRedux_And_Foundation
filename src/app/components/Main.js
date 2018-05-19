import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./HomePage";
import Account from "./Account";
import TransactionContainer from "../container/TransactionContainer";
import Nav from "./Nav";
import NotFound from "./NotFound";

export default class Main extends Component {
    render() {
        return (<div>
            <h1>This is Main</h1>
            <Nav/>
            <Switch>
                <Route exact path="/"  component={HomePage}/>
                <Route exact path="/account"  component={Account}/>
                <Route exact path="/transaction" component={TransactionContainer}/>
                <Route component={NotFound}/>
            </Switch>
        </div>)
    }
}