import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import 'foundation-sites';
import $ from 'jquery';

import AccountContainer from "../container/AccountContainer";
import TransactionContainer from "../container/TransactionContainer";
import NotificationContainer from "../container/NotificationContainer";

import HomePage from "./HomePage";
import Nav from "./Nav";
import NotFound from "./NotFound";

import {LOG_IN} from '../constant';
export default class Main extends Component {
    componentDidMount() {
        $(document).foundation();
        const {dispatch} = this.props;
        axios.get('/getInfo')
            .then(res => {
                if (res.data !== 'CHUA_DANG_NHAP') {
                    dispatch({type: LOG_IN, username: res.data});
                    console.log(res.data);
                }

            })
            .catch(err => console.log(err));
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
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}