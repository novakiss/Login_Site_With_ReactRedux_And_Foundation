import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import 'foundation-sites';
import $ from 'jquery';
import {history} from "../../../helper/history";

import AppRoute from './Router';

import NotificationContainer from "../../notification/containers/NotificationContainer";
import Nav from "./Nav";

export default class Main extends Component {
    componentDidMount() {
        $(document).foundation();
        this.props.checkLogin();
    }

    render() {
        const {notification} = this.props;
        const xhtml = notification != null ? <NotificationContainer txt={notification}/> : null;
        return (
            <Router history={history}>
                <div>
                    <Nav/>
                    {xhtml}
                    <AppRoute/>
                </div>
            </Router>
        )
    }
}