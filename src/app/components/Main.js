import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./HomePage";
import Account from "./Account";
import Transactions from "./Transactions";
import Nav from "./Nav";
import NotFound from "./NotFound";
import {store} from "../../index";

export default class Main extends Component {
    loginRequire=()=>{
        console.log(store.getState().username);
        if(store.getState().username===null){
            return <HomePage/>
        } else return <Transactions/>;
    };

    render() {
        /*render={()=>{
                    console.log(this.props.name);
                    if(this.props.name===null){
                        return <HomePage/>
                    } else return <Transactions/>;
                }}*/
        return (<div>
            <h1>This is Main</h1>
            <Nav/>
            <Switch>
                <Route exact path="/"  component={HomePage}/>
                <Route exact path="/account"  component={Account}/>
                <Route exact path="/transaction"  render={this.loginRequire}/>
                <Route component={NotFound}/>
            </Switch>
        </div>)
    }
}