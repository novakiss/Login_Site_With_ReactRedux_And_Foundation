import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import 'foundation-sites';
import $ from 'jquery';

import AccountContainer from "../container/AccountContainer";
import TransactionContainer from "../container/TransactionContainer";
import NotificationContainer from "../container/NotificationContainer";
import GetDataContainer from "../container/GetDataContainer";

import HomePage from "./HomePage";
import Nav from "./Nav";
import NotFound from "./NotFound";

export default class Main extends Component {
    componentDidMount() {
        $(document).foundation();
        this.props.checkLogin();
    }

    render() {
        const {notification}= this.props;
        const xhtml= notification!=null?<NotificationContainer txt={notification}/>:null;
        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    {xhtml}
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/account" component={AccountContainer}/>
                        <Route exact path="/transaction" component={TransactionContainer}/>
                        <Route exact path="/getData" component={GetDataContainer}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}